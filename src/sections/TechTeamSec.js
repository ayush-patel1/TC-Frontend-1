import React from 'react';
import TeamMemberCard from '../components/TechTeamCard'
import {techteamList} from '../assets/Techteam_data';
import styles from './TechTeamSec.module.css'; 
import Title from "../components/Title";

function TechTeamSec() {
  return (
    <div className={styles.Container}>
      <Title color={"TECH"} noncolor={"TEAM"} />
      <h4>
      "Bringing Imagination to Life - Our Tech Team's Journey"</h4>
      <div className={styles.CardContainer}>
        {techteamList.map(item=>{
          return(
            <TeamMemberCard
            name={item.name}
            imgSrc= {item.imgUrl}
            desi= {item.desi}
            GithubId={item.githubUrl}
            LinkedinId={item.linkedinUrl}
            InstaId= {item.instaUrl}
            />
          )
        })}
      </div>
    </div>
  );
}

export default TechTeamSec;

