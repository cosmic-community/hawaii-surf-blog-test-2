import { createBucketClient } from '@cosmicjs/sdk'
import { SurfPost, Category, Author, validateCategory } from '@/types'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export async function getSurfPosts(limit?: number): Promise<SurfPost[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'surf-posts' })
      .props(['id', 'slug', 'title', 'created_at', 'metadata'])
      .depth(1)
      .limit(limit || 50)
      .sort('created_at')

    return objects as SurfPost[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching surf posts:', error)
    throw error
  }
}

export async function getSurfPost(slug: string): Promise<SurfPost | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'surf-posts', slug })
      .props(['id', 'slug', 'title', 'created_at', 'metadata'])
      .depth(1)

    return object as SurfPost
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    console.error('Error fetching surf post:', error)
    throw error
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'slug', 'title', 'metadata'])
      .sort('title')

    // Validate and ensure all categories have required description field
    return objects.map(validateCategory) as Category[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching categories:', error)
    throw error
  }
}

export async function getCategory(slug: string): Promise<Category | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'categories', slug })
      .props(['id', 'slug', 'title', 'metadata'])

    return validateCategory(object) as Category
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    console.error('Error fetching category:', error)
    throw error
  }
}

export async function getAuthors(): Promise<Author[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'authors' })
      .props(['id', 'slug', 'title', 'metadata'])
      .sort('title')

    return objects as Author[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching authors:', error)
    throw error
  }
}

export async function getAuthor(slug: string): Promise<Author | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'authors', slug })
      .props(['id', 'slug', 'title', 'metadata'])

    return object as Author
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    console.error('Error fetching author:', error)
    throw error
  }
}