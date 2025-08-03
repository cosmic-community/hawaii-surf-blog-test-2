// app/posts/[slug]/page.tsx
import { getSurfPost, getSurfPosts } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import AuthorCard from '@/components/AuthorCard'
import CategoryBadge from '@/components/CategoryBadge'
import SurfConditions from '@/components/SurfConditions'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getSurfPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getSurfPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const description = post.metadata?.content
    ? post.metadata.content.replace(/<[^>]*>/g, '').substring(0, 160)
    : `Read about ${post.title} on Hawaii Surf Blog`

  return {
    title: `${post.title} - Hawaii Surf Blog`,
    description,
    openGraph: {
      title: post.title,
      description,
      images: post.metadata?.featured_image?.imgix_url 
        ? [`${post.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`]
        : [],
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getSurfPost(slug)

  if (!post) {
    notFound()
  }

  const publishedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link 
          href="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          ← Back to Surf Reports
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {post.metadata?.category && (
            <CategoryBadge category={post.metadata.category} />
          )}
          <time className="text-gray-500 text-sm">
            {publishedDate}
          </time>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* Surf Conditions */}
        <SurfConditions post={post} />
      </header>

      {/* Featured Image */}
      {post.metadata?.featured_image && (
        <div className="mb-8">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            width={1200}
            height={600}
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        {post.metadata?.content && (
          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.metadata.content }}
          />
        )}
      </div>

      {/* Author Bio */}
      {post.metadata?.author && (
        <div className="border-t pt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
          <AuthorCard author={post.metadata.author} />
        </div>
      )}
    </article>
  )
}