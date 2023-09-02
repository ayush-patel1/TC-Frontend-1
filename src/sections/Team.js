import React from 'react'
import styles from './Team.module.css'
import HeadCard from '../components/HeadCard'
//import coordinatorsList from ../assets/heads_data.js

const Team = () => {
  return (
    <div className={styles.container}>
      <h1>Head Coordinators</h1>
      <div className={styles.headSection}>
      <HeadCard
      img = "https://pyxis.nymag.com/v1/imgs/0aa/632/8e1f18e60b915ee1a2a4d2bafcbe5d4125-02-cillian-murphy-chat-room-silo.rvertical.w330.png"
      name = "Vaibhav Sawant"
      domain = "Chemical"
      linkedinId = "https://www.linkedin.com/in/b-deewakar-rao-960438280/"
      />
      <HeadCard
      img = "https://freepngimg.com/thumb/robert_downey_jr/20940-5-robert-downey-jr-transparent.png"
      name = "Chirag Singhal"
      domain = "CSE"
      linkedinId = "https://www.linkedin.com/in/b-deewakar-rao-960438280/"
      />
      <HeadCard
      img = "https://pyxis.nymag.com/v1/imgs/0aa/632/8e1f18e60b915ee1a2a4d2bafcbe5d4125-02-cillian-murphy-chat-room-silo.rvertical.w330.png"
      name = "IShan Nayak"
      domain = "ECE"
      linkedinId = "https://www.linkedin.com/in/b-deewakar-rao-960438280/"
      />      
      </div>

      </div>

  )
}

export default Team
/*{coordinatorsList.map((heads)=>{
        return(
          <HeadCard
          key = {heads.id}
          img = {heads.imgUrl}
          name = {heads.name}
          domain = {heads.domain}
          linkedinId = {heads.linkedinUrl}
          InstaId = {heads.instaUrl}
          />
        )
  })}*/