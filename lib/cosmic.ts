import { createBucketClient } from '@cosmicjs/sdk'
import { SurfPost, Author, Category, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all surf posts with related data
export async function getSurfPosts(): Promise<SurfPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'surf-posts' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
      .sort('-created_at');
    
    return response.objects as SurfPost[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching surf posts:', error);
    throw new Error('Failed to fetch surf posts');
  }
}

// Fetch single surf post by slug
export async function getSurfPost(slug: string): Promise<SurfPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'surf-posts', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    
    return response.object as SurfPost;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error(`Error fetching surf post ${slug}:`, error);
    throw new Error('Failed to fetch surf post');
  }
}

// Fetch posts by category
export async function getSurfPostsByCategory(categoryId: string): Promise<SurfPost[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'surf-posts',
        'metadata.category': categoryId 
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
      .sort('-created_at');
    
    return response.objects as SurfPost[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error(`Error fetching posts by category ${categoryId}:`, error);
    throw new Error('Failed to fetch posts by category');
  }
}

// Fetch all authors
export async function getAuthors(): Promise<Author[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'authors' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Author[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching authors:', error);
    throw new Error('Failed to fetch authors');
  }
}

// Fetch single author by slug
export async function getAuthor(slug: string): Promise<Author | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'authors', slug })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.object as Author;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error(`Error fetching author ${slug}:`, error);
    throw new Error('Failed to fetch author');
  }
}

// Fetch all categories
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Category[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
}

// Fetch single category by slug
export async function getCategory(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'categories', slug })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.object as Category;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error(`Error fetching category ${slug}:`, error);
    throw new Error('Failed to fetch category');
  }
}