interface SurfConditionsProps {
  surfSpot?: string
  waveHeight?: string
  windConditions?: {
    key: string
    value: string
  }
  surfRating?: {
    key: string
    value: string
  }
}

export default function SurfConditions({ 
  surfSpot, 
  waveHeight, 
  windConditions, 
  surfRating 
}: SurfConditionsProps) {
  if (!surfSpot && !waveHeight && !windConditions && !surfRating) {
    return null
  }

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'epic':
        return 'text-purple-600 bg-purple-100'
      case 'excellent':
        return 'text-green-600 bg-green-100'
      case 'good':
        return 'text-blue-600 bg-blue-100'
      case 'fair':
        return 'text-yellow-600 bg-yellow-100'
      case 'poor':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getWindIcon = (windKey: string) => {
    switch (windKey) {
      case 'offshore':
        return '💨'
      case 'onshore':
        return '🌬️'
      case 'cross-shore':
        return '↔️'
      case 'light':
        return '🍃'
      default:
        return '💨'
    }
  }
  
  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
      <h3 className="font-semibold text-gray-900 mb-3">Surf Conditions</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {surfSpot && (
          <div className="flex items-center gap-2">
            <span className="text-lg">📍</span>
            <div>
              <p className="text-sm text-gray-600">Surf Spot</p>
              <p className="font-medium">{surfSpot}</p>
            </div>
          </div>
        )}
        
        {waveHeight && (
          <div className="flex items-center gap-2">
            <span className="text-lg">🌊</span>
            <div>
              <p className="text-sm text-gray-600">Wave Height</p>
              <p className="font-medium">{waveHeight}</p>
            </div>
          </div>
        )}
        
        {windConditions && (
          <div className="flex items-center gap-2">
            <span className="text-lg">{getWindIcon(windConditions.key)}</span>
            <div>
              <p className="text-sm text-gray-600">Wind Conditions</p>
              <p className="font-medium">{windConditions.value}</p>
            </div>
          </div>
        )}
        
        {surfRating && (
          <div className="flex items-center gap-2">
            <span className="text-lg">⭐</span>
            <div>
              <p className="text-sm text-gray-600">Surf Rating</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRatingColor(surfRating.key)}`}>
                {surfRating.value}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}