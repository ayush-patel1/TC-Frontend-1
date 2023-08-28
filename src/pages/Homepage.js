import React from 'react'
// import {styles} from './Pages.module.css'
import HomeHero from '../sections/HomeHero'
import OurJourney from '../sections/OurJourney'
// import Team from '../sections/Team'

const Homepage = () => {
  return (
    <div>
        <HomeHero/>
        <OurJourney/>
        {/* <Team/> */}
    </div>
  )
}

export default Homepage