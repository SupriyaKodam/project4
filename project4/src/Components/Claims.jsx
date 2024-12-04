import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import StarAdvantages from './StarAdvantages';

const Claims = () => {
    const claimsdata = [
        { id: 1, image:'./Images/phone.SVG',heading: "Anywhere Cashless Claims", content: "Now avail Anywhere Cashless Claims all across India. With 14000+ Network Hospitals, we are also one of India’s widest medical coverage providers." },
        { id: 2, image:'./Images/Customer.SVG',heading: "24*7 Customer Service", content: "Call us at 1800-425-2255 for claim intimation, telehealth services and to clear your queries." },
        { id: 3, image:'./Images/house.SVG',heading: "In-house Claim Settlement", content: "We’re the first Standalone Health Insurance company to settle the claims without any TPA’s, instead you are secured by our qualified in-house team." },
        { id: 4, image:'./Images/text.SVG',heading: "Claim Settlement", content: "90% of our claims are settled under cashless within 2 hrs and 92% of claims are settled under reimbursement within 7 days." },
        { id: 5, image:'./Images/Hos.SVG',heading: "Hospitals", content: "We’ve got you covered by offering the best health insurance for family under our valuable service providers, agreed network and network hospitals for quality treatment." },
        { id: 6, image:'./Images/Award.SVG',heading: "Awards", content: "We’ve been awarded for innovative product, best claim settlement and service provider from reputed survey organizations.How to Choose the Best Family Hea" },
      ];
      const advantagesdata = [
        { id: 1, image:'./Images/a.SVG',heading: "Wellness Program", content: "Take part in our wellness programs and earn rewards for staying healthy. Redeem those rewards to avail renewal discounts on your medical policy." },
        { id: 2, image:'./Images/b.SVG',heading: "Telemedicine", content: "Dial 7676 905 905 to avail free consultations with our expert doctors via phone, chat or video call." },
        { id: 3, image:'./Images/c.SVG',heading: "Diagnostic Centres", content: "Get access to 1,635 diagnostic centres across India with home pickup of lab samples and health checkup at doorstep." },
        { id: 4, image:'./Images/d.SVG',heading: "E-Pharmacy", content: "Order medicines online at a discounted price. Home delivery and Store pick-ups are available across 2780 cities.How to Choose the Best Family He" },
      ];
  const [alignment, setAlignment] = useState('claims'); // Default selection is 'claims'

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment); // Update state only if a valid value is selected
    }
  };

  const displayedData = alignment === 'claims' ? claimsdata : advantagesdata;


  return (
    <div className='bg-gray-50'>
      <div className="flex flex-col items-center justify-center mt-20 p-10">
        <h1 className="text-4xl font-semibold mb-5">
          Why Star Health is one of India’s top health insurance providers?
        </h1>
        <p className="text-xs w-full md:w-[1000px] mb-5 md:text-md">
          As the Health Insurance Specialist, we extend our services from offering tailor-made quality medical insurance plans for family to fast in-house claim settlements. With our wide network of hospitals, we ensure easy access to fulfill your medical needs with cashless mediclaim for family floater policies. Our insurance experts, hassle-free claim settlement process, and simple reimbursement policies help our customers choose the best medical policy for family health insurance needs.
        </p>
        <div className='mb-5'>
        <ToggleButtonGroup
          color="standard"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton
            value="claims"
            sx={{
              backgroundColor: alignment === 'claims' ? 'black' : 'white',
              color: alignment === 'claims' ? 'white' : 'black',
              '&:hover': {
                backgroundColor: alignment === 'claims' ? 'black' : '#f0f0f0',
              },
            }}
          >
            CLAIMS
          </ToggleButton>
          <ToggleButton
            value="advantages"
            sx={{
              backgroundColor: alignment === 'advantages' ? 'black' : 'white',
              color: alignment === 'advantages' ? 'white' : 'black',
              '&:hover': {
                backgroundColor: alignment === 'advantages' ? 'black' : '#f0f0f0',
              },
            }}
          >
            STAR ADVANTAGES
          </ToggleButton>
        </ToggleButtonGroup>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-x-3 lg:gap-y-10 lg:w-[1200px] lg:px-6 md:px-5">
        {displayedData.map((item) => (
          <div
            key={item.id}
            className="border md:px-5 border-gray-300 rounded-lg py-5 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center w-full h-auto md:w-[300px] md:gap-0 lg:w-[350px] lg:h-[250px]"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-8 h-8 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{item.heading}</h2>
            <p className="text-gray-600 text-center w-auto lg:w-[300px]">{item.content}</p>
          </div>
        ))}
      </div>
      <button className="p-3 bg-blue-700 text-white rounded-lg mt-10">Buy Now</button>
      </div>
      <div>
        <StarAdvantages/>
      </div>
    </div>
  );
};

export default Claims;
