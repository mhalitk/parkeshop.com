import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPostsByCategory, getBlogCategories } from '@/lib/blog'
import { BlogPost } from '@/types/blog'
import Hero from '@/components/Hero'

interface BlogCategoryPageProps {
  params: {
    slug: string
  }
}

export default function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const categories = getBlogCategories()
  const category = categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  const posts = getBlogPostsByCategory(category.name)

  return (
    <>
      <Hero 
        title={category.name}
        description={category.description}
        showButton={false}
      />
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">{category.name}</h1>
        <p className="text-gray-600 mb-12">{category.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  )
} 