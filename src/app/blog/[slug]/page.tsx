import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getBlogPostBySlug } from '@/lib/blog'
import { BlogPost } from '@/types/blog'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-500">
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.category}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-4">Etiketler</h2>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
} 