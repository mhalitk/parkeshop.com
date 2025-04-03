import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts, getBlogCategories } from '@/lib/blog'
import { BlogPost } from '@/types/blog'
import Hero from '@/components/Hero'

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const categories = getBlogCategories()

  return (
    <>
      <Hero 
        title="Blog Yazıları"
        description="Parke ve zemin kaplama hakkında bilgi ve ipuçları"
        showButton={false}
      />
      <div className="container py-12">        
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Kategoriler</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
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
                    <span className="text-sm text-primary-600">{post.category}</span>
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