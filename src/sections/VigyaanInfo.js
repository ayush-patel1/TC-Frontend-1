import React from 'react'
import styles from './VigyaanInfo.module.css'

const VigyaanInfo = () => {
  return (
    <div >
      <div className={styles.topContainer}>
        <div className={styles.heading}>VIGYAAN</div>
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