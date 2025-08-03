interface Author {
  id: string
  title: string
  slug: string
  metadata: {
    name: string
    bio?: string
    profile_photo?: {
      url: string
      imgix_url: string
    }
    years_surfing?: number
    favorite_spot?: string
  }
}

interface AuthorCardProps {
  author: Author
  showBio?: boolean
}

export default function AuthorCard({ author, showBio = false }: AuthorCardProps) {
  const { metadata } = author
  
  return (
    <div className="flex items-start gap-3">
      {metadata.profile_photo?.imgix_url && (
        <img
          src={`${metadata.profile_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
          alt={metadata.name}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
      )}
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{metadata.name}</h4>
        {metadata.years_surfing && (
          <p className="text-sm text-gray-600">
            {metadata.years_surfing} years surfing
          </p>
        )}
        {metadata.favorite_spot && (
          <p className="text-sm text-gray-600">
            Favorite spot: {metadata.favorite_spot}
          </p>
        )}
        {showBio && metadata.bio && (
          <p className="text-sm text-gray-700 mt-2">{metadata.bio}</p>
        )}
      </div>
    </div>
  )
}