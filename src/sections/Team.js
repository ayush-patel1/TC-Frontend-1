import React from "react";
import styles from "./Team.module.css";
import HeadCard from "../components/HeadCard";
import { coordinatorsList } from "../assets/heads_data";
import OCCard from "../components/OCCard";
import Title from "../components/Title";

const Team = () => {
  return (
    <div className={styles.container}>
      <Title color={"OVERALL"} noncolor={"COORDINATORS"}/>
      <div className={styles.OverallHeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id <= 4) {
            return (
              <OCCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>
      <Title color={"HEAD"} noncolor={"COORDINATORS"}/>
      <div className={styles.HeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id > 4) {
            return (
              <HeadCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Team;
