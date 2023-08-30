import React from 'react'
import Events from '../sections/Events'
import EveningShow from '../sections/EveningShow'
import EventsGallery from '../sections/EventsGallery'
import AavartanHero from '../sections/AavartanHero'

const Aavartan = () => {
  return (
    <div>
      {/* <Events/> */}
      <AavartanHero/>
      <div className='AavartanContainer'>
      <EveningShow/>
      <EventsGallery/>
      </div>
    </div>
  )
}

export default Aavartan