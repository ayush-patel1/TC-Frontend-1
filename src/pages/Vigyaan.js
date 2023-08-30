import React from 'react'
import VigyaanInfo from '../sections/VigyaanInfo'
import ProblemStatement from '../sections/ProblemStatement'
import VigyaanGallery from '../sections/VigyaanGallery'

const Vigyaan = () => {
  return (
    <div>
      <VigyaanInfo/>
      <div className="AavartanContainer">
      <ProblemStatement/>
      <VigyaanGallery/>
      </div>
    </div>
  )
}

export default Vigyaan