import React from 'react'
import Header from '../Components/Header'
import WhyStarHealth from '../Components/WhyStarHealth'
import WhatisHealthInsu from '../Components/WhatisHealthInsu'
import HealthPlans from '../Components/HealthPlans'
import Importance from '../Components/Importance'
import Claims from '../Components/Claims'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'
import Team from '../Components/Team'

const Landingpage = () => {
  return (
    <div>
      <Header/>
      <WhyStarHealth/>
      <WhatisHealthInsu/>
      <HealthPlans/>
      <Importance/>
      <Claims/>
      <FAQ/>
      <Footer/>
      <Team/>
    </div>
  )
}

export default Landingpage
