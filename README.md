# Hawaii Surf Blog

![Hawaii Surf Blog](https://imgix.cosmicjs.com/749a6fb0-7078-11f0-a051-23c10f41277a-photo-1502933691298-84fc14542831-1754232308122.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A dynamic Next.js surf blog showcasing Hawaii's legendary surf culture, featuring real-time surf reports, comprehensive gear reviews, and detailed surf spot guides. Built with Cosmic CMS for seamless content management.

## ✨ Features

- **Dynamic Surf Reports** - Real-time surf conditions with wave heights and ratings
- **Comprehensive Gear Reviews** - Detailed equipment reviews tested in Hawaiian conditions  
- **Surf Spot Guides** - Expert guides to Hawaii's best breaks
- **Author Profiles** - Local surf expert profiles and backgrounds
- **Category Filtering** - Browse by surf reports, spots, and gear reviews
- **Responsive Design** - Mobile-first design optimized for surfers on-the-go
- **SEO Optimized** - Built-in meta tags and structured data
- **Fast Performance** - Server-side rendering with Next.js 15

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=688f758eb5e4a42c017a283a&clone_repository=688fc1d1266f644d6b13f1d1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a Hawaii surf blog with posts, authors, and categories"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Vercel** - Deployment platform

## 🏄‍♂️ Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd hawaii-surf-blog
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Cosmic credentials:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📡 Cosmic SDK Examples

### Fetching Surf Posts
```typescript
import { cosmic } from '@/lib/cosmic'

const posts = await cosmic.objects
  .find({ type: 'surf-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Single Post with Author
```typescript
const post = await cosmic.objects
  .findOne({ type: 'surf-posts', slug: 'epic-session-at-pipeline-today' })
  .depth(1)
```

### Filtering by Category
```typescript
const spotGuides = await cosmic.objects
  .find({ 
    type: 'surf-posts',
    'metadata.category': categoryId 
  })
  .depth(1)
```

## 🌊 Cosmic CMS Integration

This application integrates with your Cosmic bucket structure:

### Content Types
- **Surf Posts** - Blog posts with surf-specific metadata
- **Authors** - Surf expert profiles with experience data
- **Categories** - Content organization (Reports, Spots, Gear Reviews)

### Key Features
- Connected object relationships for authors and categories
- Surf-specific metadata (wave height, wind conditions, ratings)
- File uploads for featured images and author photos
- Rich text content with HTML support

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy automatically

### Environment Variables for Production
Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY` 
- `COSMIC_WRITE_KEY`

<!-- README_END -->