import React from "react";
import styles from "./VigyaanGallery.module.css";
import { Line } from "../components/Line";

const VigyaanGallery = () => {
  return (
    <div>
      <div className={`${styles.VigyaanGallery} ${styles.container}`}>
      <div className={styles.title}>
        <h1 className={styles.heading}>
          VIGYAAN <span>GALLERY</span>
        </h1>
        <Line/>
      </div>
        <div className={styles.GallerySection}>
          <div className={styles.box1}></div>
          <div className={styles.box2}></div>
          <div className={styles.box3}></div>
          <div className={styles.box4}></div>
          <div className={styles.box5}></div>
          <div className={styles.box6}></div>
        </div>
      </div>
    </div>
  );
};

export default VigyaanGallery;
