import React from "react";
import styles from "./Team.module.css";
import HeadCard from "../components/HeadCard";
import { coordinatorsList } from "../assets/heads_data";
import { coresList } from "../assets/cores_data";
import OCCard from "../components/OCCard";
import Title from "../components/Title";

const Team = () => {
  return (
    <div className={styles.container}>
      <Title color={"OVERALL"} noncolor={"COORDINATORS"} />
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
      <Title color={"HEAD"} noncolor={"COORDINATORS"} />
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
      <Title color={"CORE"} noncolor={"COORDINATORS"} />
      <div className={styles.CoreSection}>
        {coresList.map((heads) => {
          return (
            <div
              key={heads.id}
              className={styles.fn_cs_steps}
              data-cols={4}
              data-gap={60}
            >
              <ul>
                <li>
                  <div className={styles.item}>
                    <div className={styles.item_in}>
                      <h3 className={styles.fn__gradient_title}>{heads.Name}</h3>
                      <p>{heads.Domain}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
