import Link from 'next/link'
import { PostCardProps } from '@/types'
import CategoryBadge from '@/components/CategoryBadge'
import AuthorCard from '@/components/AuthorCard'

export default function PostCard({ 
  post, 
  showAuthor = true, 
  showCategory = true, 
  className = "" 
}: PostCardProps) {
  const publishedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  // Extract plain text from HTML content for preview
  const getContentPreview = (htmlContent: string, maxLength: number = 150) => {
    const textContent = htmlContent.replace(/<[^>]*>/g, '')
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength) + '...'
      : textContent
  }

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {/* Featured Image */}
      {post.metadata?.featured_image && (
        <Link href={`/posts/${post.slug}`}>
          <div className="aspect-video overflow-hidden">
            <img
              src={`${post.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              width={300}
              height={200}
            />
          </div>
        </Link>
      )}

      <div className="p-6">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-3">
          {showCategory && post.metadata?.category && (
            <CategoryBadge category={post.metadata.category} />
          )}
          <time className="text-gray-500 text-sm">
            {publishedDate}
          </time>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          <Link 
            href={`/posts/${post.slug}`}
            className="hover:text-primary-600 transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        {/* Content Preview */}
        {post.metadata?.content && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {getContentPreview(post.metadata.content)}
          </p>
        )}

        {/* Surf Conditions Summary */}
        {(post.metadata?.surf_spot || post.metadata?.wave_height || post.metadata?.surf_rating) && (
          <div className="bg-gray-50 rounded-lg p-3 mb-4 space-y-2">
            {post.metadata.surf_spot && (
              <div className="flex items-center text-sm">
                <span className="text-gray-500 mr-2">📍</span>
                <span className="font-medium">{post.metadata.surf_spot}</span>
              </div>
            )}
            <div className="flex items-center gap-4 text-sm">
              {post.metadata.wave_height && (
                <div className="flex items-center">
                  <span className="text-gray-500 mr-1">🌊</span>
                  <span>{post.metadata.wave_height}</span>
                </div>
              )}
              {post.metadata.surf_rating && (
                <div className="flex items-center">
                  <span className="text-gray-500 mr-1">⭐</span>
                  <span className="font-medium text-primary-600">
                    {post.metadata.surf_rating.value}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Author */}
        {showAuthor && post.metadata?.author && (
          <div className="pt-4 border-t">
            <AuthorCard author={post.metadata.author} className="compact" />
          </div>
        )}

        {/* Read More Link */}
        <div className="mt-4">
          <Link 
            href={`/posts/${post.slug}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            Read Full Report
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}