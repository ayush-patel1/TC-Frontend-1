import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0,0)
  }, [])
  return (
    <div>TeamPage</div>
  )
}

export default TeamPage