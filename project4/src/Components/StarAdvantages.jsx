import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StarAdvantages = () => {
    const inclusionsdata = [
        { id: 1, image:'./Images/t.SVG',heading: "Hospitalization Expenses", content: "Most medical insurance plans cover hospitalization expenses such as room rents, ICU charges, surgery expenses, doctor consultations, etc. incurred on illness, injury or accidents." },
        { id: 2, image:'./Images/t.SVG',heading: "Pre & Post-Hospitalization", content: "Understanding the impact of rising medical expenses, most policies cover pre and post hospitalization expenses related to in-patient hospitalization." },
        { id: 3, image:'./Images/t.SVG',heading: "Day Care Treatment", content: "Technological advancements have reduced the time of surgeries and treatments that once cost a lot of time. Hence, buy a medical insurance that cover Day Care treatments and procedures." },
        { id: 4, image:'./Images/t.SVG',heading: "Domiciliary Hospitalization", content: "Some medical insurance policies also cover Domiciliary treatments taken at home on the advice of the medical practitioner." },
        { id: 5, image:'./Images/t.SVG',heading: "Organ Donor Expenses", content: "Most medical insurance policies cover Organ Donor Expenses. Organ harvesting and transplantation expenses are covered if the insured person is the recipient." },
        { id: 6, image:'./Images/t.SVG',heading: "Road Traffic Accident", content: "Accidents are unpredictable. Most medical insurance plans cover in-patient hospitalizations due to road traffic accidents." },
        { id: 7, image:'./Images/t.SVG',heading: "AYUSH Cover", content: "In addition to allopathic treatments, most medical insurance plans also cover alternative systems of medicines such as Ayurveda, Yoga & Naturopathy, Unani, Siddha and Homeopathy." },
        { id: 8, image:'./Images/t.SVG',heading: "Health Check-up", content: "In addition to hospitalization and other benefits, medical insurance policies also cover the expenses incurred for health check-up." },
        { id: 9, image:'./Images/t.SVG',heading: "AYUSH Cover", content: "What if your medical expenses exceed your sum insured? At such times, the restoration benefit restores 100% of your Sum Insured automatically after its full or partial exhaustion." },
      ];
      const exclusionsdata = [
        { id: 1, image:'./Images/n.SVG',heading: "Self-Inflicted Injuries", content: "Any form of self-inflicted injuries will not be covered under Medical Insurance policies." },
        { id: 2, image:'./Images/n.SVG',heading: "Obesity/Weight Control", content: "Most Medical Insurance will not cover expenses incurred due to the treatment for obesity or weight control." },
        { id: 3, image:'./Images/n.SVG',heading: "Cosmetic or Plastic surgery", content: "Most Medical Insurance Plans will not cover expenses incurred due to the treatment for cosmetic or plastic surgery if performed to enhance the appearance." },
        { id: 4, image:'./Images/n.SVG',heading: "Hazardous or Adventure Sports", content: "Medical Insurance policies will not cover expenses incurred due to any health complications for indulging in hazardous or adventure sports." },
        { id: 5, image:'./Images/n.SVG',heading: "Dental Treatments", content:"Medical Insurance Plans will not cover Dental treatment or surgery unless necessitated due to accidental injuries and requiring hospitalization." },
        { id: 6, image:'./Images/n.SVG',heading: "Medical Aid", content: "Medical Insurance Plans will not cover the cost of spectacles, hearing aids, wheelchairs, walkers and crutches and other similar aids." },

      ];
      const waitingperiod = [
        {id:1,image:'./Images/w.SVG',heading:"Specific Diseases",content:"Specific diseases are a list of diseases or ailments for which the medical insurance company has a waiting period. The expenses incurred due to such diseases will be covered after the completion of the waiting period."},
        {id:2,image:'./Images/w.SVG',heading:"Maternity Benefit",content:"Medical Insurance Plans have Maternity Benefits and Newborn Cover. Such benefits can be availed after the completion of the waiting period."},
        {id:3,image:'./Images/w.SVG',heading:"Initial Waiting Period",content:"Initial waiting period denotes the time during which the policyholder has to wait to avail the medical policy benefits. However, it will not apply for hospitalization expenses due to accidents as they will be covered from day 1."},
        {id:4,image:'./Images/w.SVG',heading:"Pre-Existing Diseases",content:"Pre-Existing Diseases (PED) refer to the existing health condition of the person before taking the policy. Every Health Insurance Company has a PED waiting period. PED will be covered after the completion of the waiting period."},
      ]
  const [alignment, setAlignment] = useState('inclusions'); // Default selection is 'claims'

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment); // Update state only if a valid value is selected
    }
  };

  const displayedData = alignment === 'inclusions' ? inclusionsdata : alignment === 'exclusions'?exclusionsdata:waitingperiod;


  return (
    <div>
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
            value="inclusions"
            sx={{
              backgroundColor: alignment === 'inclusions' ? 'black' : 'white',
              color: alignment === 'inclusions' ? 'white' : 'black',
              '&:hover': {
                backgroundColor: alignment === 'inclusions' ? 'black' : '#f0f0f0',
              },
            }}
          >
            INCLUSIONS
          </ToggleButton>
          <ToggleButton
            value="exclusions"
            sx={{
              backgroundColor: alignment === 'exclusions' ? 'black' : 'white',
              color: alignment === 'exclusions' ? 'white' : 'black',
              '&:hover': {
                backgroundColor: alignment === 'exclusions' ? 'black' : '#f0f0f0',
              },
            }}
          >
            EXCLUSIONS
          </ToggleButton>
          <ToggleButton
              value="waitingperiod"
              sx={{
                backgroundColor: alignment === 'waitingperiod' ? 'black' : 'white',
                color: alignment === 'waitingperiod' ? 'white' : 'black',
                '&:hover': {
                  backgroundColor: alignment === 'waitingperiod' ? 'black' : '#f0f0f0',
                },
              }}
            >
              WAITING PERIOD
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
      <button className="p-3 bg-blue-700 text-white rounded-lg mt-3">Buy Now</button>
      </div>
    </div>
  );
};

export default StarAdvantages;
