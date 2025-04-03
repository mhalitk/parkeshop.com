import OpenAI from 'openai'
import fs from 'fs'
import path from 'path'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

const categories = [
  'Parke Çeşitleri',
  'Döşeme Teknikleri',
  'Bakım ve Temizlik',
  'Trendler ve Tasarımlar',
  'Malzeme Bilgisi',
]

const generateBlogPost = async () => {
  try {
    // Generate title and content
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Sen Türkçe içerik üreten bir blog yazarısın. Parke ve zemin kaplama konusunda uzmansın. SEO dostu, bilgilendirici ve akıcı içerikler üretiyorsun.',
        },
        {
          role: 'user',
          content: 'Parke ve zemin kaplama konusunda SEO dostu bir blog yazısı oluştur. Başlık, giriş paragrafı, alt başlıklar ve sonuç paragrafı içermeli. Markdown formatında yaz.',
        },
      ],
    })

    const content = completion.choices[0].message.content
    if (!content) throw new Error('No content generated')

    // Extract title from content
    const titleMatch = content.match(/^#\s+(.+)$/m)
    if (!titleMatch) throw new Error('No title found in content')
    const title = titleMatch[1]

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    // Generate excerpt
    const excerptCompletion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Verilen içeriğin 160 karakterlik bir özetini oluştur.',
        },
        {
          role: 'user',
          content: content,
        },
      ],
    })

    const excerpt = excerptCompletion.choices[0].message.content?.slice(0, 160)

    // Generate image
    const imageCompletion = await openai.images.generate({
      model: 'dall-e-3',
      prompt: `Professional product photo of ${title}, clean background, high quality, realistic`,
      n: 1,
      size: '1792x1024',
    })

    const imageUrl = imageCompletion.data[0].url
    if (!imageUrl) throw new Error('No image generated')

    // Download and save image
    const imageResponse = await fetch(imageUrl)
    const imageBuffer = await imageResponse.arrayBuffer()
    const imagePath = path.join(process.cwd(), 'public/img/blog', `${slug}.jpg`)
    fs.writeFileSync(imagePath, Buffer.from(imageBuffer))

    // Create frontmatter
    const frontmatter = {
      title,
      slug,
      excerpt,
      date: format(new Date(), 'yyyy-MM-dd'),
      category: categories[Math.floor(Math.random() * categories.length)],
      imageUrl: `/img/blog/${slug}.jpg`,
      tags: ['parke', 'zemin kaplama', 'ev dekorasyonu'],
    }

    // Create markdown file
    const markdown = `---
${Object.entries(frontmatter)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key}: [${value.map((v) => `"${v}"`).join(', ')}]`
    }
    return `${key}: "${value}"`
  })
  .join('\n')}
---

${content}`

    // Save markdown file
    const filePath = path.join(BLOG_DIR, `${slug}.md`)
    fs.writeFileSync(filePath, markdown)

    console.log(`Blog post generated: ${filePath}`)
  } catch (error) {
    console.error('Error generating blog post:', error)
  }
}

generateBlogPost() 