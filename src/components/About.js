import React from "react";
import styles from "./About.module.css";
import Title from "./Title";
import FireAnimation from "./FlameAnimation";
import prizeIcon from "../assets/images/HomePage/trophy.png";
import eventsIcon from "../assets/images/HomePage/events.png";
import participantsIcon from "../assets/images/HomePage/participants.png";
import collegesIcon from "../assets/images/HomePage/colleges.png";

function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_cont_in}>
        {/* <div className="FlameAni-cont" style={{ position: "absolute", width: "100%", height: "100%" }}> */}
        {/* <FireAnimation /> */}
        {/* </div> */}
        {/* <Title color={"ABOUT"} noncolor={"US"} /> */}
        <h1 className={styles.about_title}>ABOUT</h1>
        <div className={styles.about_des_out}>
          <div className={styles.about_des_in}>
            <p>
              Team Technocracy is the official technical committee of NIT
              Raipur, dedicated to fostering innovation, technical skills, and a
              passion for technology among students. We organize various
              technical events under the Aavartan fest, workshops, and projects
              throughout the year.
            </p>
          </div>
        </div>
        <div className={styles.about_boxes}>
          <div className={styles.about_box}>
            <img
              className={styles.abox_icon}
              src="https://www.tryst-iitd.org/static/media/about-5.973f96e28be79bfad0f1c0b987f3ab85.svg"
              alt="icon"
            />
            <div className={styles.abox_num}> 10,000 +</div>
            <div className={styles.abox_Title}>FOOTFALL</div>
          </div>
          <div className={styles.about_box}>
            <img className={styles.abox_icon} src={collegesIcon} alt="icon" />
            <div className={styles.abox_num}> 50 +</div>
            <div className={styles.abox_Title}>COLLEGES</div>
          </div>
          <div className={styles.about_box}>
            <img className={styles.abox_icon} src={eventsIcon} alt="icon" />
            <div className={styles.abox_num}> 30 +</div>
            <div className={styles.abox_Title}>EVENTS</div>
          </div>
          <div className={styles.about_box}>
            <img className={styles.abox_icon} src={prizeIcon} alt="icon" />
            <div className={styles.abox_num}> 6 Lacs +</div>
            <div className={styles.abox_Title}>PRIZES</div>
          </div>
          <div className={styles.about_box}>
            <img
              className={styles.abox_icon}
              src={participantsIcon}
              alt="icon"
            />
            <div className={styles.abox_num}> 200 +</div>
            <div className={styles.abox_Title}>PARTICIPANTS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
