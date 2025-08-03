import { Category, getCategoryColor } from '@/types'

interface CategoryBadgeProps {
  category: Category
  variant?: 'default' | 'selected'
  className?: string
}

export default function CategoryBadge({ 
  category, 
  variant = 'default', 
  className = '' 
}: CategoryBadgeProps) {
  const color = getCategoryColor(category)
  
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium transition-colors'
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-700',
    selected: 'text-white'
  }
  
  const style = variant === 'selected' ? { backgroundColor: color } : {}

  return (
    <span 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    >
      {category.metadata?.name || 'Untitled Category'}
    </span>
  )
}