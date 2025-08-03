// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  published_at?: string;
}

// Wind condition types for select-dropdown
export type WindCondition = 'offshore' | 'onshore' | 'cross-shore' | 'light';
export type SurfRating = 'poor' | 'fair' | 'good' | 'excellent' | 'epic';

// Author object type
export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    years_surfing?: number;
    favorite_spot?: string;
  };
}

// Category object type
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    description?: string; // Already optional - this matches the actual data structure
    color?: string;
  };
}

// Surf Post object type
export interface SurfPost extends CosmicObject {
  type: 'surf-posts';
  metadata: {
    title?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: Author;
    category?: Category;
    surf_spot?: string;
    wave_height?: string;
    wind_conditions?: {
      key: WindCondition;
      value: string;
    };
    surf_rating?: {
      key: SurfRating;
      value: string;
    };
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Component prop types
export interface PostCardProps {
  post: SurfPost;
  showAuthor?: boolean;
  showCategory?: boolean;
  className?: string;
}

export interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export interface AuthorCardProps {
  author: Author;
  className?: string;
  showBio?: boolean;
}

export interface SurfConditionsProps {
  post?: SurfPost;
  surfSpot?: string;
  waveHeight?: string;
  windConditions?: {
    key: string;
    value: string;
  };
  surfRating?: {
    key: string;
    value: string;
  };
}

// Type guards
export function isSurfPost(obj: CosmicObject): obj is SurfPost {
  return obj.type === 'surf-posts';
}

export function isAuthor(obj: CosmicObject): obj is Author {
  return obj.type === 'authors';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}

// Utility types
export type CreateSurfPostData = Omit<SurfPost, 'id' | 'created_at' | 'modified_at'>;
export type UpdateSurfPostData = Partial<CreateSurfPostData>;