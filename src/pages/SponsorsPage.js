import React, { useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


 import Spons from '../sections/Spons'

const SponsorsPage = () => {
 
  useEffect(() => {
    AOS.init({ duration: 1000, });
    window.scrollTo(0, 0)
   
  }, [])
  return (
    <div className="Homescrolled">
        <Spons/>
    </div>
  )
}

export default SponsorsPage