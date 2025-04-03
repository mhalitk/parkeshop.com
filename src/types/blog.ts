export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  date: string
  category: string
  imageUrl: string
  tags: string[]
  content: string
}

export interface BlogCategory {
  name: string
  slug: string
  description: string
}

export interface BlogTag {
  name: string
  slug: string
} 