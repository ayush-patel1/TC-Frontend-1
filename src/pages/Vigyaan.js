import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VigyaanInfo from '../sections/VigyaanInfo'
import VigyaanGallery from '../sections/VigyaanGallery'
import VigyaanForm from '../forms/VigyaanForm'
import ProblemStatement from '../sections/ProblemStatement'
import VigyaanHero from '../sections/hero/VigyaanHero'
const Vigyaan = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
      {/* <VigyaanInfo/> */}
      <VigyaanHero/>
      <div className="AavartanContainer">
        <VigyaanForm/>
        <ProblemStatement/>
      <VigyaanGallery/>
      </div>
    </div>
  )
}

export default Vigyaan