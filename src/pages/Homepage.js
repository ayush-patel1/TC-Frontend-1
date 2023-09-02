import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeHero from '../sections/HomeHero'
import Contact from '../sections/Contact'
import OurJourney from '../sections/OurJourney'
import Faq from '../sections/Faq'

const Homepage = () => {
  useEffect(() => {
    AOS.init({  duration: 1000, });
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
      <HomeHero/>
      <div className="HomeContainer">
        <OurJourney/>
        <Faq/>
        <Contact/>
      </div>
    </div>
  )
}

export default Homepage