import { getSurfPosts, getCategories } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import CategoryFilter from '@/components/CategoryFilter'
import Hero from '@/components/Hero'
import { SurfPost, Category } from '@/types'

export const metadata = {
  title: 'Hawaii Surf Blog - Latest Surf Reports & Conditions',
  description: 'Get the latest surf reports, wave conditions, and surf spot guides from Hawaii\'s best breaks. Expert reviews and local insights from Pipeline to Waikiki.',
}

export default async function Home() {
  const [posts, categories] = await Promise.all([
    getSurfPosts(),
    getCategories()
  ])

  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 7)

  return (
    <div className="space-y-12">
      <Hero />
      
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Report</h2>
            <p className="text-gray-600 mt-2">Latest conditions from Hawaii's premier surf spots</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <PostCard 
                post={featuredPost} 
                showAuthor={true} 
                showCategory={true}
                className="h-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              {featuredPost.metadata?.featured_image && (
                <img
                  src={`${featuredPost.metadata.featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={featuredPost.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  width={800}
                  height={600}
                />
              )}
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Reports</h2>
          <p className="text-gray-600 mt-2">Surf conditions, gear reviews, and spot guides</p>
        </div>

        <CategoryFilter categories={categories} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {recentPosts.map((post) => (
            <PostCard 
              key={post.id} 
              post={post} 
              showAuthor={true} 
              showCategory={true}
            />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No surf reports available at the moment.</p>
            <p className="text-gray-400 mt-2">Check back soon for the latest conditions!</p>
          </div>
        )}
      </section>
    </div>
  )
}