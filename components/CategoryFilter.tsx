'use client'

import { useState } from 'react'
import { Category } from '@/types'
import CategoryBadge from './CategoryBadge'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory?: string | null
  onCategoryChange?: (categoryId: string | null) => void
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory = null, 
  onCategoryChange 
}: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(selectedCategory)

  const handleCategoryClick = (categoryId: string | null) => {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  // Filter out categories without proper metadata
  const validCategories = categories.filter(category => 
    category.metadata && category.metadata.name
  )

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All Reports
      </button>
      
      {validCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          title={category.metadata?.description || category.metadata.name}
        >
          <CategoryBadge 
            category={category} 
            variant={activeCategory === category.id ? 'selected' : 'default'}
          />
        </button>
      ))}
    </div>
  )
}