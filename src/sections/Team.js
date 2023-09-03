import React from 'react'
import styles from './Team.module.css'
import HeadCard from '../components/HeadCard'
import { coordinatorsList } from '../assets/heads_data'

const Team = () => {
  return (
    <div className={styles.container}>
      <h1>Overall Coordinators</h1>
      <div className={styles.OverallHeadSection}>
      {coordinatorsList.map((heads)=>{
        if(heads.id<=4){
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
        }
        return null
  })}
      </div>
      <h1>Head Coordinators</h1>
      <div className={styles.HeadSection}>
      {coordinatorsList.map((heads)=>{
        if(heads.id>4){
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
        }
        return null
  })}
      </div>
    </div>
 )
}

export default Team
