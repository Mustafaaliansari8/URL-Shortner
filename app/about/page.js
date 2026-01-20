export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-purple-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-600 mb-4 md:mb-6 text-center">About Bitlinks</h1>
        
        <div className="space-y-4 md:space-y-6 text-gray-700">
          <p className="text-base md:text-lg text-center md:text-left">
            Bitlinks is a simple, fast, and reliable URL shortener that helps you create short, 
            memorable links from long URLs.
          </p>
          
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-purple-500 mb-2 md:mb-3">Why Choose Bitlinks?</h2>
            <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
              <li>No registration required</li>
              <li>Custom short URLs</li>
              <li>Fast and reliable redirects</li>
              <li>Clean, simple interface</li>
              <li>Free to use</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-purple-500 mb-2 md:mb-3">How It Works</h2>
            <ol className="list-decimal list-inside space-y-1 md:space-y-2 text-sm md:text-base">
              <li>Enter your long URL</li>
              <li>Choose a custom short name</li>
              <li>Click generate</li>
              <li>Share your short link</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}