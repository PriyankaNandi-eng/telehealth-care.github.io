import React from 'react'
import HeroSection from './HeroSection'

const About = () => {
  const data = {
    name: "About Us",
    image: "/public/Images/About.png",
    para: "By using this website, you will have the opportunity to see a doctor at your convenience.There is also an opportunity to see a doctor according to your disease. This website has the opportunity to get health care 24 hours a day. There is also the facility to talk to doctors in messages, video calls and audio calls. For this, patients can discuss their diseases with the doctors very well."
   
  }
  
  
  return (
  <HeroSection {...data}  />
  )
}

export default About