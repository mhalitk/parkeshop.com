import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost, BlogCategory } from '@/types/blog'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export function getAllBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR)
  
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        ...data,
        content,
      } as BlogPost
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      ...data,
      content,
    } as BlogPost
  } catch (error) {
    return null
  }
}

export function getBlogCategories(): BlogCategory[] {
  const posts = getAllBlogPosts()
  const categories = new Set(posts.map((post) => post.category))
  
  return Array.from(categories).map((category) => ({
    name: category,
    slug: category.toLowerCase().replace(/\s+/g, '-'),
    description: `Blog posts about ${category}`,
  }))
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.category === category)
} 