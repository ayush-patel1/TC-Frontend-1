import React, { useState } from "react";
import styles from './About.module.css'


function About() {
   
    return (
        <div className={styles.about_container}>
            <div className={styles.title_with_bg}>ABOUT</div>
            <div className={styles.about_main}>
                TRYST, IIT Delhi is North India's largest science, technological and management festival conducted by the student community of IIT Delhi. From enchanting guest lectures to learning hands-on skills through workshops, from exciting departmental activities and competitions to mesmerising techno-cultural nights, from meeting eminent personalities to discovering science as never seen before, TRYST has it all. With 75+ events and participation of 60,000 students from all over the nation, team TRYST ensures there is something fun for everyone. Come aboard and have an experience of a lifetime!. Click the links below to explore the current tryst website and social media
            </div>
           
            <div className={styles.about_boxes}>
                <div className={styles.about_box}>
                    <img className={styles.abox_icon} src="https://www.tryst-iitd.org/static/media/about-5.973f96e28be79bfad0f1c0b987f3ab85.svg" alt="icon" />
                    <div className={styles.abox_num}> 
                    60,000+
                    </div>
                    <div className={styles.abox_Title}>
                        FOOTFALL
                    </div>
                </div>
                <div className={styles.about_box}>
                    <img className={styles.abox_icon} src="https://www.tryst-iitd.org/static/media/about-4.9b0a31e0bb61d4ed5a53c19e6379b710.svg" alt="icon" />
                    <div className={styles.abox_num}>
                    700+
                    </div>
                    <div className={styles.abox_Title}>
                        COLLEGES
                    </div>
                </div>
                <div className={styles.about_box}>
                    <img className={styles.abox_icon} src="https://www.tryst-iitd.org/static/media/about-3.d19bb113f00f387d3f16f4558b746bc7.svg" alt="icon" />
                    <div className={styles.abox_num}>
                    75+
                    </div>
                    <div className={styles.abox_Title}>
                        EVENTS
                    </div>
                </div>
                <div className={styles.about_box}>
                    <img className={styles.abox_icon} src="https://www.tryst-iitd.org/static/media/about-1.942f425aee9ada78dbb276060beebec2.svg" alt="icon" />
                    <div className={styles.abox_num}>
                    12lacs+
                    </div>
                    <div className={styles.abox_Title}>
                        PRIZES
                    </div>
                </div>
                <div className={styles.about_box}>
                    <img className={styles.abox_icon} src="https://www.tryst-iitd.org/static/media/about-2.0662e7d746094da22acfb69f414a508b.svg" alt="icon" />
                    <div className={styles.abox_num}>
                    20000+
                    </div>
                    <div className={styles.abox_Title}>
                        PARTICIPANTS
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;