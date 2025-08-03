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

interface CategoryBadgeProps {
  category: Category
  size?: 'sm' | 'md' | 'lg'
}

export default function CategoryBadge({ category, size = 'md' }: CategoryBadgeProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }
  
  return (
    <span
      className={`inline-block rounded-full font-medium text-white ${sizeClasses[size]}`}
      style={{ backgroundColor: category.metadata.color }}
    >
      {category.metadata.name}
    </span>
  )
}