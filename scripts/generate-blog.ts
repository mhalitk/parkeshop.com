const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');
const axios = require('axios');
require('dotenv').config();

// === CONFIGURATION ===
const BLOG_DIR = path.join(__dirname, '../src/content/blog/');
const IMAGE_DIR = path.join(__dirname, '../public/img/blog');
const CATEGORY_MAP = {
    'parke-cesitleri': 'Parke Çeşitleri',
    'kurulum-diy': 'Kurulum & DIY',
    'bakim-temizlik': 'Bakım & Temizlik',
    // 'trendler-ilham': 'Trendler & İlham',
    // 'fiyat-satinalma-rehberi': 'Fiyat & Satın Alma Rehberi',
};

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function sanitizeSlug(text: string) {
    return text.toLowerCase()
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/ç/g, 'c')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

async function getNextCategory() {
    const categories = Object.keys(CATEGORY_MAP);

    return categories[Math.floor(Math.random() * categories.length)];
}

async function getNextUnusedTitle(category: string) {
    const titlesFile = path.join(__dirname, `../titles/${category}/titles.txt`);
    const usedTitlesFile = path.join(__dirname, `../titles/${category}/used_titles.txt`);

    const titles = fs.readFileSync(titlesFile, 'utf-8')
        .split('\n')
        .filter((line: string) => line.trim());

    let usedIndices = new Set();
    if (fs.existsSync(usedTitlesFile)) {
        const usedLines = fs.readFileSync(usedTitlesFile, 'utf-8')
            .split('\n')
            .filter((line: string) => line.trim());
        usedIndices = new Set(usedLines.map((line: string) => parseInt(line)));
    }

    for (let i = 0; i < titles.length; i++) {
        if (!usedIndices.has(i)) {
            fs.appendFileSync(usedTitlesFile, `${i}\n`);
            return titles[i];
        }
    }

    throw new Error('All blog titles have been used.');
}

async function generateBlog(title: string, category: string) {
    const prompt = `Write a 2000-2500 word blog post in Turkish for this title: "${title}"

This is a blog post for parkeshop.com, a knowledge base for parquet products in Turkey.

Parkeshop doesn't sell parquet products, but it's a blog for parquet enthusiasts.

Place internal links to home page (https://parkeshop.com), and contact page (https://parkeshop.com/contact) if relevant.

The blog should be between 2000 and 2500 words.

The blog text will be used in website, so it should be SEO-friendly and contain relevant keywords.

The blog should have basic html formatting, with h2 and h3 and h4 headings, and p tags for paragraphs.

The blog should start with front matter, with the title, slug, excerpt, date, category as ${CATEGORY_MAP[category as keyof typeof CATEGORY_MAP]}, imageUrl, and tags.

The slug should be ${sanitizeSlug(title)}.

The excerpt should be a short description of the blog post, 160 characters max.

The image should be in /img/blog/${sanitizeSlug(title)}.png

The date should be the ${new Date().toISOString().split('T')[0]} in the format YYYY-MM-DD.

Category name should be ${CATEGORY_MAP[category as keyof typeof CATEGORY_MAP]}.

The tags should be an array of strings in Turkish and auto-generated based on the content.
`;

    const response = await client.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
    });

    return response.choices[0].message.content;
}

async function generateImage(title: string) {
    const prompt = `Create a clean, aesthetic banner image for the blog: '${title}'. No text, just the image.`;

    const response = await client.images.generate({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: '1792x1024',
        quality: 'standard',
    });

    const url = response.data[0].url;
    const imageResponse = await axios.get(url, { responseType: 'arraybuffer' });
    const slug = sanitizeSlug(title);
    const imagePath = path.join(IMAGE_DIR, `${slug}.png`);

    fs.writeFileSync(imagePath, imageResponse.data);

    return `/img/blog/${slug}.png`;
}

async function saveBlog(category: string, title: string, content: string) {
    const slug = sanitizeSlug(title);

    const filename = path.join(BLOG_DIR, category, `${slug}.md`);

    fs.writeFileSync(filename, content);
}

async function main() {
    try {
        const category = await getNextCategory();
        console.log(`Generating content for: ${category}`);

        const title = await getNextUnusedTitle(category);
        console.log(`Generating content for: ${title}`);

        console.log('Generating image...');
        await generateImage(title);

        console.log('Generating content...');
        const content = await generateBlog(title, category);
        await saveBlog(category, title, content);

        console.log('Blog and image saved.');
    } catch (error) {
        console.error('Error:', error);
    }
}

main(); 