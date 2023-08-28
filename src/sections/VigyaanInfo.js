import React from 'react'
import styles from './VigyaanInfo.module.css'
import vigyaanLappy from '../assets/images/VigyaanPC.png'
import vigyaanPhone from '../assets/images/VigyaanMobile.png'

const VigyaanInfo = () => {
  return (
    <div >
      <div className={styles.vigyaancontainer}>
        <img src={vigyaanLappy} alt="" width="100%" className={styles.vigyaanlappy} />
        <img src={vigyaanPhone} alt="" width="100%" className={styles.vigyaanphone} />
      </div>
    
      <div className={styles.forms}>
       <div className={styles.form}>REGISTRATION FORM</div>
       <div className={styles.form}>ABSTRACT SUBMISSION</div>
       <div className={styles.form}>SAMPLE ABSRACT</div>
       <div className={styles.form}>RULES AND REGULATION</div>
      </div>
      
    </div>
  )
}

export default VigyaanInfo