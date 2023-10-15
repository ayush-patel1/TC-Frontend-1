import React, { useEffect, useRef } from 'react';
import { BiLogoGithub ,BiLogoLinkedinSquare ,BiLogoGmail,BiLogoInstagram } from "react-icons/bi";
import VanillaTilt from 'vanilla-tilt';
import styles from './TechTeamCard.module.css'

function TeamMemberCard(props) {
  const cardRef = useRef(null);

  useEffect(() => {
  
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 12,
        speed: 300,
        glare: true,
        'max-glare': 0.2,
      });
    }
      return () => {
        
        if (cardRef.current) {
          cardRef.current.vanillaTilt.destroy();
        }
  
      };
    }, []);

  return (
    <>
<div ref={cardRef} className={styles.card}>
        <img src={props.imgSrc} className={styles.cardImage} alt="..." />
        <div className={styles.cardBody}>
          <div className={styles.cardTitle}>{props.name}</div>
          <div className={styles.cardText}>{props.desi}</div>
        </div>
        <div className={styles.social}>
       <a href={props.GithubId}><BiLogoGithub className={styles.icon}/></a>
       <a href={props.LinkedinId}><BiLogoLinkedinSquare className={styles.icon}/></a>
       <a href=''><BiLogoGmail className={styles.icon}/></a>
       <a href={props.InstaId}><BiLogoInstagram className={styles.icon}/></a>
        </div>
    </div>
    </>
  );
}
export default TeamMemberCard;