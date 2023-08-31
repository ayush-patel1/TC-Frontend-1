import React from 'react'
import HomeHero from '../sections/HomeHero'
import Contact from '../sections/Contact'
import OurJourney from '../sections/OurJourney'
import Faq from '../sections/Faq'

const Homepage = () => {
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