import React from 'react'

export default function About() {
  return (
    <>
     <div className="bg-base-100 text-black min-h-screen">
      {/* Main Container */}
      <div className="max-w-screen-xl mx-auto p-6">

        {/* Header Section */}
        <header className="text-center my-12">
          <h1 className="text-5xl font-bold">Welcome to Suhana Ecommerce!</h1>
          <p className="text-xl mt-4">Your one-stop shop for everything you need, from electronics to fashion!</p>
        </header>

        {/* About Us Section */}
        <section className="bg-gray-100 text-gray-800 p-8 rounded-xl shadow-lg mt-10">
          <h2 className="text-3xl font-semibold text-center text-gray-900">Who We Are</h2>
          <p className="mt-4 text-lg">
            Suhana Ecommerce is a vibrant online marketplace that brings the latest and greatest products right to your doorstep.
            Whether you're searching for top-of-the-line electronics, fashion trends, or everyday essentials, we have something for everyone.
            Our mission is to provide a seamless shopping experience with quality products and exceptional customer service.
          </p>
        </section>

        {/* Values Section */}
        <section className="mt-10 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600">Customer Satisfaction</h3>
              <p className="mt-4 text-m text-black">We prioritize our customers, ensuring that they are always satisfied with their shopping experience with us.</p>
            </div>
            {/* Value 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-600">Quality Assurance</h3>
              <p className="mt-4 text-m text-black">We only offer high-quality products that meet rigorous standards to ensure durability and reliability.</p>
            </div>
            {/* Value 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-pink-600">Fast Delivery</h3>
              <p className="mt-4 text-m text-black">We understand the importance of timely delivery, so we strive to get your orders to you as quickly as possible.</p>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-600"
              />
              <h3 className="text-xl font-semibold mt-4">Suhana</h3>
              <p className="mt-2 text-gray-600">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full border-4 border-teal-600"
              />
              <h3 className="text-xl font-semibold mt-4">John Smith</h3>
              <p className="mt-2 text-gray-600">Lead Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full border-4 border-pink-600"
              />
              <h3 className="text-xl font-semibold mt-4">Emma Williams</h3>
              <p className="mt-2 text-gray-600">Marketing Head</p>
            </div>
          </div>
        </section>

       
        
      </div>
    </div>

    </>
)}
