import React from 'react'

const WhatisHealthInsu = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row items-center justify-center mt-10 gap-6'>
           <div>
               <img src="./Images/Family.SVG" className='w-[600px] rounded-lg'/>
           </div>
           <div className='flex flex-col items-center justify-center md:items-start md:justify-start lg:w-[640px] h-auto'>
                 <h1 className='text-md md:text-4xl font-semibold mb-8'>What is Health Insurance?</h1>
                 <p className='text-xs md:text-sm mb-4'>Medical Insurance or Health Insurance is a shield that protects you and your family from financial instability during health emergencies. Against the common misconception that only elderly or people with health risks need to be secured, it is essential for everyone. The best mediclaim policy for family should offer peace of mind in times of hospitalization by taking care of your medical bills. You can buy medical insurance online to ensure quick & efficient service.<br/><br/>
                 Uncertainties like COVID-19 have taught us the critical need for medical insurance. On the other hand, with the continuous spike in healthcare inflation, good family health coverage plans can protect your finances either by providing cashless treatments or reimbursements on the incurred medical expenses. The flexibility of our medical insurance plans for families allows you to get the correct plan according your needs.</p>
                 <button className='p-2 bg-blue-700 text-white rounded-3xl'>Buy Now</button>
           </div>
      </div>
    </div>
  )
}

export default WhatisHealthInsu
