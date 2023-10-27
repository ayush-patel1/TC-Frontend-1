import React from 'react'
import Title from '../components/Title'
import VigyaanCard from '../components/VigyaanCard'
import "./VigyaanFinalistSection.css"
import {vigyaanFinalistList} from '../assets/vigyaan_finalist_data';

const VigyaanFinalistSection = () => {
  return (
    <div className='vigyaan-finalist-section'>
        <Title color="VIGYAAN" noncolor="FINALISTS"/>
        <div className='vigyaan-card--container'>
        {vigyaanFinalistList.map(item=>{
          return(
            <VigyaanCard
            team1={item.team1}
            team2={item.team2}
            team3={item.team3}
            team4={item.team4}
            team5={item.team5}
            branch={item.branch}
            />
          )
        })}
        </div>
    </div>
  )
}

export default VigyaanFinalistSection