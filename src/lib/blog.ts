import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface BlogPost {
  title: string;
  imageUrl: string;
  excerpt: string;
  date?: string;
  slug: string;
  href: string;
  tags?: string[];
  content?: string;
  category: string;
}

interface BlogCategory {
  title: string;
  description: string;
  slug: string;
}

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export function getAllBlogPosts(): BlogPost[] {
  const categories = fs.readdirSync(BLOG_DIR)
  let allPosts: BlogPost[] = []

  categories.forEach(category => {
    const categoryDir = path.join(BLOG_DIR, category)
    if (!fs.existsSync(categoryDir) || !fs.lstatSync(categoryDir).isDirectory()) {
      return
    }

    const filenames = fs.readdirSync(categoryDir)
    const posts = filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(categoryDir, filename)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data, content } = matter(fileContent)
        const slug = filename.replace(/\.md$/, '')

        if (typeof data.tags === 'string') {
          data.tags = data.tags.split(',').map(tag => tag.trim())
        }

        return {
          title: data.title || 'Untitled',
          excerpt: data.excerpt || '',
          date: data.date,
          slug: slug,
          href: `/b/${category}/${slug}`,
          tags: data.tags || [],
          category: category,
          imageUrl: data.imageUrl || '',
          content
        } as BlogPost
      })

    allPosts = [...allPosts, ...posts]
  })

  return allPosts.sort((a, b) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getBlogPostBySlug(category: string, slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, category, `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    if (typeof data.tags === 'string') {
      data.tags = data.tags.split(',').map(tag => tag.trim())
    }

    return {
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      date: data.date,
      slug: slug,
      href: `/b/${category}/${slug}`,
      tags: data.tags || [],
      category: category,
      imageUrl: data.imageUrl || '',
      content
    } as BlogPost
  } catch (error) {
    return null
  }
}

export function getBlogCategories(): BlogCategory[] {
  const categories = fs.readdirSync(BLOG_DIR)
  return categories
    .filter(category => {
      const categoryDir = path.join(BLOG_DIR, category)
      return fs.existsSync(categoryDir) && fs.lstatSync(categoryDir).isDirectory()
    })
    .map(category => {
      const indexPath = path.join(BLOG_DIR, category, 'index.json')
      if (fs.existsSync(indexPath)) {
        const indexContent = fs.readFileSync(indexPath, 'utf-8')
        return JSON.parse(indexContent) as BlogCategory
      }
      return {
        title: category,
        description: `Blog posts about ${category}`,
        slug: category
      }
    })
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const categoryDir = path.join(BLOG_DIR, category)
  if (!fs.existsSync(categoryDir) || !fs.lstatSync(categoryDir).isDirectory()) {
    return []
  }

  const filenames = fs.readdirSync(categoryDir)
  return filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(categoryDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)
      const slug = filename.replace(/\.md$/, '')

      if (typeof data.tags === 'string') {
        data.tags = data.tags.split(',').map(tag => tag.trim())
      }

      return {
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        date: data.date,
        slug: slug,
        href: `/b/${category}/${slug}`,
        tags: data.tags || [],
        category: category,
        imageUrl: data.imageUrl || '',
        content
      } as BlogPost
    })
    .sort((a, b) => {
      if (!a.date || !b.date) return 0
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
} 