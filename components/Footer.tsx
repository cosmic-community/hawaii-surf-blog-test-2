export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-full flex items-center justify-center text-sm">
                🌊
              </div>
              <h3 className="text-xl font-bold">Hawaii Surf Blog</h3>
            </div>
            <p className="text-gray-300 max-w-md">
              Your trusted source for Hawaii surf conditions, gear reviews, and local insights. 
              From Pipeline to Waikiki, we cover it all.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">Latest Reports</a>
              </li>
              <li>
                <a href="/authors" className="hover:text-white transition-colors">Our Authors</a>
              </li>
              <li>
                <a href="/categories" className="hover:text-white transition-colors">Categories</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="hover:text-white transition-colors">Surf Reports</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">Surf Spots</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">Gear Reviews</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Hawaii Surf Blog. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Ride the waves responsibly. Respect the ocean and local surf culture.
          </p>
        </div>
      </div>
    </footer>
  )
}