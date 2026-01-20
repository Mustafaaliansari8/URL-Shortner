export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8 bg-purple-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-600 mb-4 md:mb-6 text-center">Contact Us</h1>
        
        <div className="space-y-4 md:space-y-6">
          <p className="text-gray-700 text-center md:text-left text-sm md:text-base">
            Have questions or feedback about Bitlinks? We'd love to hear from you!
          </p>
          
          <div className="space-y-3 md:space-y-4">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-purple-500">Email</h3>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=imustafaali04@gmail.com" target="_blank" className="text-gray-600 hover:text-purple-600 text-sm md:text-base break-all">imustafaali04@gmail.com</a>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-semibold text-purple-500">GitHub</h3>
              <a href="https://github.com/Mustafaaliansari8" className="text-gray-600 hover:text-purple-600 text-sm md:text-base break-all">https://github.com/Mustafaaliansari8</a>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-semibold text-purple-500">Response Time</h3>
              <p className="text-gray-600 text-sm md:text-base">We typically respond within 24 hours</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-3 md:p-4 rounded-lg">
            <h3 className="font-semibold text-purple-600 mb-2 text-sm md:text-base">Quick Help</h3>
            <p className="text-xs md:text-sm text-gray-600">
              For technical issues, please include the short URL and describe the problem you're experiencing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}