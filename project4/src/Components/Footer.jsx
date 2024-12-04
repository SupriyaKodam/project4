import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center p-20 bg-blue-700 text-white mb-10'>
          <div className='flex flex-col md:flex-row items-start justify-start gap-x-20'>
               <div className='flex flex-col gap-y-3'>
               <h1 className='w-80 text-4xl font-bold md:w-96 lg:w-3/4 '>STAR Health - trusted by over 70 million families</h1>
               <p className='text-md'>Here is why</p>
               </div>
               <img className='w-64' src="./Images/Milli.SVG"/>
          </div>
          <div>
            <div className='flex flex-col gap-3  md:flex-row md:gap-3 lg:gap-x-10 mb-10'>
            <div className='flex flex-row w-auto h-auto p-10 bg-blue-600 rounded-lg gap-3'>
            <img className="w-10 h-10" src="./Images/star.SVG"/>
            <p className='w-60 md:w-auto lg:w-96 text-md'>Best health insurance provider of the year 2020 - Financial Services Awards presented by Business Today -Money Today</p>
            </div>
            <div className='flex flex-row w-auto h-auto p-10 bg-blue-600 rounded-lg gap-3'>
            <img className="w-10 h-10" src="./Images/star.SVG"/>
            <p className='w-60 md:w-auto lg:w-96'>Health Insurance Company of the year 2019 - India Insurance Summit & Awards 2020 Young Star Insurance Policy won the award for Most</p>
            </div>   
          </div>
          <div className='flex flex-col gap-3 md:flex-row md:gap-3 lg:gap-x-10'>
            <div className='flex flex-row w-auto h-auto p-10 bg-blue-600 rounded-lg gap-3'>
            <img className="w-10 h-10" src="./Images/star.SVG"/>
            <p className='w-60 md:w-auto lg:w-96'>Young Star Insurance Policy won the award for Most Innovative New Product of the Year - SSOCHAMs Insurance E-Summit and Awards 2020</p>
            </div>
            <div className='flex flex-row w-auto h-auto p-10 bg-blue-600 rounded-lg gap-3'>
            <img className="w-10 h-10" src="./Images/star.SVG"/>
            <p className='w-60 md:w-auto lg:w-96'>Health Insurance Company of the year 2019 - India Insurance Summit & Awards 2020 Young Star Insurance Policy won the award for Most</p>
            </div>   
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
