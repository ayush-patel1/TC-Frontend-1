import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Events from '../sections/Events'
import EveningShow from '../sections/EveningShow'
import EventsGallery from '../sections/EventsGallery'
import AavartanHero from '../sections/hero/AavartanHero'
import FullPageLoader from '../layout/FullPageLoader';
const Aavartan = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1000, });
    window.scrollTo(0, 0)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])
  return (
    <div>
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <div>
          {/* <Events/> */}
          {/* <AavartanHero/> */}
          <AavartanHero />
          <div className='AavartanContainer'>
            <EveningShow />
            <EventsGallery />
          </div>
        </div>
      )}
    </div>
  )
}

export default Aavartan