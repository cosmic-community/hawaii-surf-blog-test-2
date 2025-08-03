import { Category, getCategoryColor, getCategoryDescription } from '@/types'

interface CategoryBadgeProps {
  category: Category
  showDescription?: boolean
  className?: string
}

export default function CategoryBadge({ 
  category, 
  showDescription = false, 
  className = "" 
}: CategoryBadgeProps) {
  const color = getCategoryColor(category)
  const description = getCategoryDescription(category)
  
  return (
    <div className={`inline-flex items-center ${className}`}>
      <span 
        className="px-3 py-1 text-xs font-medium text-white rounded-full"
        style={{ backgroundColor: color }}
      >
        {category.metadata?.name || category.title}
      </span>
      {showDescription && description && (
        <span className="ml-2 text-sm text-gray-600">
          {description}
        </span>
      )}
    </div>
  )
}