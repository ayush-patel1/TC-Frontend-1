import React from 'react'
import styles from './Pages.module.css'
import VigyaanInfo from '../sections/VigyaanInfo'
import ProblemStatement from '../sections/ProblemStatement'
import VigyaanGallery from '../sections/VigyaanGallery'

const Vigyaan = () => {
  return (
    <div className={styles.VigyaanPage}>
      <VigyaanInfo/>
      <ProblemStatement/>
      <VigyaanGallery/>
    </div>
  )
}

export default Vigyaan