import React from 'react'
import styles from './Spons.module.css'
import Page_layout from '../components/Sponsors/spons_page'
import SponsCards from '../components/Sponsors/sponscard'

const Spons = () => {
  return (
    <div className={styles.spons}>

    <div><Page_layout /> </div>
    <div><SponsCards/></div>
        
    </div>
  )
}

export default Spons;