import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

const HealthPlans = () => {
    const features = [
        {
          id: 1,
          image: "./Images/1.SVG",
          heading1: "Star Health Assure Insurance Policy",
          heading2:"IRDAI UIN : SHAHLIP23131V022223",
          heading3:"For those seeking widest benefits & highest coverage for risk.",
          points: [
            "Unlimited 100% Automatic Restoration & consumables included.",
            "The perfect companion for your family planning:Extensive Maternity benefits, Highest Delivery Expenses & Assisted Reproduction Treatment, New Born Cover& More.",
            "Entry Age upto 75, as well as 2 child dependent from 91 days so you can add your children, parents & parent in laws..",
          ],
          text:"Read More Benefits",
          button:"Get Assure",
        },
        {
          id: 2,
          image: "./Images/2.SVG",
          heading1: "Young Star Insurance Policy",
          heading2:"IRDAI UIN : SHAHLIP22036V042122",
          heading3:"For the young & healthy, seeking a risk protection policy",
          points: [
            "Lowest premium, meant for those under 40.",
            "Only 1 year waiting period for slow growing diseases.",
            "Midterm Inclusion for future spouse+child.",
          ],
          button:"Get Young Star",
        },
        {
          id: 3,
          image: "./Images/3.SVG",
          heading1: "Star Comprehensive Insurance Policy",
          heading2:"IRDAI UIN : SHAHLIP25037V082425",
          heading3:"For those seeking complete coverage & pre-existing disease waiting period reduction.",
          points: [
            "Secure yourself sooner: PED Buyback option to reduce waiting period for PED to 1 year.",
            "Support for family planning: Delivery expenses, New Born Baby cover & more.",
            "50% no claim bonus/year, With Personal Accident Cover equal to your sum insured get benefits of lifeinsurance in Health.",
            "100% Automatic restoration once per year on complete exhaustion of sum insured.",
          ],
          text:"Read More Benefits",
          button:"Get Comprehensive",
        },
      ];
    
  return (
    
    <div>
      <div className='flex flex-col items-center justify-center mt-20'>
          <h1 className='text-xl md:text-4xl font-semibold'>Best Health Insurance Plans for Family</h1>
          <div>
          <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 md:w-[250px] lg:w-[400px] h-auto mb-2 w-full"
          >
            <img
              src={feature.image}
              className="w-20 h-20 mb-4 object-contain"
            />
            <h1 className="text-2xl text-blue-700 font-semibold mb-4">{feature.heading1}</h1>
            <h1 className='text-black text-xl mb-4'>{feature.heading2}</h1>
            <h1 className='text-md text-gray-700 mb-4'>{feature.heading3}</h1>
            <ul className="space-y-6 flex-grow mb-4">
              {feature.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="text-blue-500 mr-2"/>
                  <p className="text-sm text-gray-500">{point}</p>
                </li>
              ))}
            </ul>
            <div className='mt-auto w-full'>
            <p className='text-blue-600 mb-4'>{feature.text}</p>
            <button className="bg-orange-600 text-white text-lg px-[20px] py-3 rounded-lg ">
              {feature.button}
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  
          </div>
      </div>
    </div>
  )
}

export default HealthPlans
