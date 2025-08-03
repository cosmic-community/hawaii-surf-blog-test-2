import { SurfConditionsProps } from '@/types'

export default function SurfConditions({ 
  post,
  surfSpot, 
  waveHeight, 
  windConditions, 
  surfRating 
}: SurfConditionsProps) {
  // Extract conditions from post if provided
  const finalSurfSpot = surfSpot || post?.metadata?.surf_spot
  const finalWaveHeight = waveHeight || post?.metadata?.wave_height
  const finalWindConditions = windConditions || post?.metadata?.wind_conditions
  const finalSurfRating = surfRating || post?.metadata?.surf_rating

  if (!finalSurfSpot && !finalWaveHeight && !finalWindConditions && !finalSurfRating) {
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
        {finalSurfSpot && (
          <div className="flex items-center gap-2">
            <span className="text-lg">📍</span>
            <div>
              <p className="text-sm text-gray-600">Surf Spot</p>
              <p className="font-medium">{finalSurfSpot}</p>
            </div>
          </div>
        )}
        
        {finalWaveHeight && (
          <div className="flex items-center gap-2">
            <span className="text-lg">🌊</span>
            <div>
              <p className="text-sm text-gray-600">Wave Height</p>
              <p className="font-medium">{finalWaveHeight}</p>
            </div>
          </div>
        )}
        
        {finalWindConditions && (
          <div className="flex items-center gap-2">
            <span className="text-lg">{getWindIcon(finalWindConditions.key)}</span>
            <div>
              <p className="text-sm text-gray-600">Wind Conditions</p>
              <p className="font-medium">{finalWindConditions.value}</p>
            </div>
          </div>
        )}
        
        {finalSurfRating && (
          <div className="flex items-center gap-2">
            <span className="text-lg">⭐</span>
            <div>
              <p className="text-sm text-gray-600">Surf Rating</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRatingColor(finalSurfRating.key)}`}>
                {finalSurfRating.value}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}