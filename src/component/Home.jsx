import React from 'react'
import HeroSection from './HeroSection'
import Contact from './Contact'

const Home = () => {
  const data = {
    name: "TeleHealth Care",
    image: "/public/Images/about2.png",
    para:"The basic idea of telehealth care is to provide a resource and time efficient platform for doctors and patients. It will enable doctors to evaluate patients without having to leave their homes. The patients will also be able to get access to health services without having to leave their respective homes or workplaces."
  }
  
  
  return (
    <>
  <HeroSection {...data}  />
  <Contact/>
  </>
  )
}

export default Home