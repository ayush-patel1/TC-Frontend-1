import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Faq from '../sections/Faq'
import FullPageLoader from '../layout/FullPageLoader';
import About from '../components/About';
import Timeline from '../sections/Timeline';
import FloatingImage from '../sections/FloatingImage';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1000, });
    window.scrollTo(0, 0)
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [])
  return (
    <div>
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <div className="Homescrolled">
          {/* <div className="dark-overlay" style={{position:"relative", zIndex:"0"}}></div> */}
          <FloatingImage/>
          {/* <HomeHero /> */}
          <div className="HomeContainer" style={{position:"relative", zIndex:"2"}}>
            <About/>
            <Timeline/>
            <Faq />
          </div>
        </div>
      )}
    </div>
  )
}

export default Homepage