'use client'

import { useState } from 'react'

interface Category {
  id: string
  title: string
  slug: string
  metadata: {
    name: string
    description: string
    color: string
  }
}

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string | null
  onCategoryChange: (categorySlug: string | null) => void
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All Posts
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.slug)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category.slug
              ? 'text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          style={{
            backgroundColor: selectedCategory === category.slug 
              ? category.metadata.color 
              : undefined
          }}
        >
          {category.metadata.name}
        </button>
      ))}
    </div>
  )
}