import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Events from '../sections/Events'
import EveningShow from '../sections/EveningShow'
import EventsGallery from '../sections/EventsGallery'
import AavartanHero from '../sections/hero/AavartanHero'

const Aavartan = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
      {/* <Events/> */}
      {/* <AavartanHero/> */}
      <AavartanHero/>
      <div className='AavartanContainer'>
      <EveningShow/>
      <EventsGallery/>
      </div>
    </div>
  )
}

export default Aavartan