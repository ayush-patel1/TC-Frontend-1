import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Team from '../sections/Team'
import FullPageLoader from '../layout/FullPageLoader';
const TeamPage = () => {
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
    <div><Team/></div>
    )}
    </div>
  )
}

export default TeamPage