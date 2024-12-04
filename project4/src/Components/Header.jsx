import React from 'react'
import InsuranceQuoteForm from './InsuranceQuoteForm'

const Header = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-start justify-start bg-violet-200 mb-10 p-5'>
          <div className='flex flex-col items-start justify-start gap-3 lg:ml-40 mt-10'>
            <img src="./Images/star_logo.SVG" className="mb-10 mt-0" />
            <h1 className='text-md md:text-4xl font-bold'>Family Health Insurance<br/> Plans for You.</h1>
            <p className='text-xl'>Medical Health Plans to ensure complete coverage for your<br/> family.</p>
          </div>
          <div>
            <img src="./Images/new-banner.SVG" className='mt-32 mr-5'/>
          </div>
          <div className='mt-10'>
          <InsuranceQuoteForm/>
          </div>
      </div>
    </div>
  )
}

export default Header
