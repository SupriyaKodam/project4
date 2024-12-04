import React from 'react'

const WhyStarHealth = () => {
    const data = [
        {
          id: 1,
          heading: "14000+",
          text: "Network Hospitals to avail cashless claims",
          image: "./Images/Network.SVG",
        },
        {
          id: 2,
          heading: "90%",
          text: "cashless claims settled in 2 hrs.",
          image: "./Images/90.SVG",
        },
        {
          id: 3,
          heading: "850+",
          text: "Branch offices across India",
          image: "./Images/850.SVG",
        },
        {
          id: 4,
          heading: "1Cr",
          text: "Claims settled since inception",
          image: "./Images/1cr.SVG",
        },
      ];
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
          <h1 className='text-xl md:text-4xl font-semibold mb-10'>Why Choose Star Health Insurance</h1>
          <div className="container mx-auto px-4 py-10">
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center bg-white shadow-2xl rounded-2xl w-full"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-2">{item.heading}</h2>
            <p className="text-xl text-gray-900 mb-4 w-[200px]">{item.text}</p>
            <img
              src={item.image}
              alt={item.heading}
              className="w-[115px] h-[115px] object-contain"
            />
            <div className="relative bottom-0 left-0 w-full h-10 bg-blue-700 rounded-b-2xl"></div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default WhyStarHealth
