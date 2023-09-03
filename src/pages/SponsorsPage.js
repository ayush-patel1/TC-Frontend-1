import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


 import Spons from '../sections/Spons'

const SponsorsPage = () => {
 
  useEffect(() => {
    AOS.init({ duration: 1000, });
    window.scrollTo(0, 0)
   
  }, [])
  return (
    <div>
        <Spons/>
    </div>
  )
}

export default SponsorsPage