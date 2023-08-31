import React from 'react'
import VigyaanInfo from '../sections/VigyaanInfo'
import VigyaanGallery from '../sections/VigyaanGallery'
import VigyaanForm from '../forms/VigyaanForm'
import ProblemStatement from '../sections/ProblemStatement'

const Vigyaan = () => {
  return (
    <div>
      <VigyaanInfo/>
      <div className="AavartanContainer">
        <VigyaanForm/>
        <ProblemStatement/>
      <VigyaanGallery/>
      </div>
    </div>
  )
}

export default Vigyaan