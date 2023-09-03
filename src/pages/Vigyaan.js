import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VigyaanInfo from '../sections/VigyaanInfo'
import VigyaanGallery from '../sections/VigyaanGallery'
import VigyaanForm from '../forms/VigyaanForm'
import ProblemStatement from '../sections/ProblemStatement'
import VigyaanHero from '../sections/hero/VigyaanHero'
import FullPageLoader from '../layout/FullPageLoader';
const Vigyaan = () => {
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
          {/* <VigyaanInfo/> */}
          <VigyaanHero />
          <div className="AavartanContainer">
          <VigyaanGallery />
          <ProblemStatement />
          <VigyaanForm />
          </div>
        </div>
    
  )
}

export default Vigyaan