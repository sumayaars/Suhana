import React from 'react'

export default function NotFoundPage() {
  return (
    <>
     <div className="bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center text-white p-6">
      {/* Container for the content */}
      <div className="text-center">

        {/* Image Section */}
        {/* <div className="mb-8">
          <img
            src="https://via.placeholder.com/400x400?text=404+Not+Found"
            alt="404 Not Found"
            className="mx-auto rounded-full shadow-lg"
          />
        </div> */}

        {/* Heading */}
        <h1 className="text-6xl font-extrabold mb-4 animate__animated animate__fadeIn">Oops! Page Not Found</h1>

        {/* Description */}
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">
          The page you're looking for might have been moved or deleted.
        </p>

        {/* Button to go back to homepage */}
        <a
          href="/"
          className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  
    </>
  )
}
