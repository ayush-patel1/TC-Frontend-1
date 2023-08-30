import React from 'react'
import HomeHero from '../sections/HomeHero'
import Contact from '../sections/Contact'
import OurJourney from '../sections/OurJourney'

const Homepage = () => {
  return (
    <div>
      <HomeHero/>
      <div className="AavartanContainer">
        <OurJourney/>
        <Contact/>
      </div>
    </div>
  )
}

export default Homepage