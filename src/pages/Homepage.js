import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeHero from '../sections/HomeHero'
import Contact from '../sections/Contact'
import OurJourney from '../sections/OurJourney'
import Faq from '../sections/Faq'
import FullPageLoader from '../layout/FullPageLoader';

const Homepage = () => {
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
          <HomeHero />
          <div className="HomeContainer">
            <OurJourney />
            <Faq />
            <Contact />
          </div>
        </div>
      )}
    </div>
  )
}

export default Homepage