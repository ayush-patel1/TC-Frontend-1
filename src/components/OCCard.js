import React from 'react'
import styles from './OCCard.module.css'
import {item1} from "../assets/images/lines.png"
  
  function OCCard(props){
    return(
      <div className={styles.parentcard}>
      <div className={styles.card}>
        <img className={styles.image} src={props.img} alt="" />
        <div className={styles.content}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.position}>{props.domain}</p>
          <div className={styles.social}>
            <p><a className={styles.linkedin} href={props.linkedinId}><i class="fa-brands fa-linkedin"></i></a></p>
            <p><a className={styles.insta} href={props.InstaId}><i class="fa-brands fa-instagram"></i></a></p>
          </div>
        </div>
        
        <img src="https://www.cognizance.org.in/Images/team/vectors/leftBottom.png" className={styles.leftBottom} alt=""></img>
        <img src="https://www.cognizance.org.in/Images/team/vectors/leftMid.png" className={styles.leftMid} alt=""></img>
        <img src="https://www.cognizance.org.in/Images/team/vectors/rightMid.png" className={styles.rightMid} alt=""></img>
      </div>
  
    </div>
    )
  }
  
  export default OCCard