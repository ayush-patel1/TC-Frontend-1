import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Team from '../sections/Team'

const TeamPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0,0)
  }, [])
  return (
    <div><Team/></div>
  )
}

export default TeamPage