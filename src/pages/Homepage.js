import React from 'react'
import {styles} from './Pages.module.css'
import HomeHero from '../sections/HomeHero'
import OurJourney from '../sections/OurJourney'
import Spons from '../sections/Spons'
import Team from '../sections/Team'

const Homepage = () => {
  return (
    <div>
        Homepage
        <HomeHero/>
        <OurJourney/>
        <Spons/>
        <Team/>
    </div>
  )
}

export default Homepage