export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hawaii Surf Blog
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Your guide to the best surf spots, conditions, and gear in the Hawaiian Islands
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            🌊 Live Surf Reports
          </span>
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            🏄‍♂️ Expert Reviews
          </span>
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            📍 Local Spots
          </span>
        </div>
      </div>
    </div>
  )
}