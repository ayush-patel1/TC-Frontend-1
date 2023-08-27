import React from "react";
import styles from "./OurJourney.module.css";
const Row = (porps) => {
  return (
    <div className={styles.row}>
      <div className={styles.rowItem}></div>
      <div className={styles.rowItem}></div>
    </div>
  );
};

const OurJourney = (props) => {
  return (
    <div>
      <div className={styles.journey}>
        <h1 className={styles.heading}>
          Our <span>Journey</span>
        </h1>
        <hr className={styles.line} />
        <div>
          <div className={styles.row}>
            <div className={styles.rowItem + " " + styles.solid}></div>
            <div className={styles.rowItem + " " + styles.trans}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowItem}></div>
            <div className={styles.rowItem + " " + styles.solid}></div>
          </div>

          <div className={styles.row}>
            <div className={styles.rowItem + " " + styles.solid}></div>
            <div className={styles.rowItem}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowItem}></div>
            <div className={styles.rowItem + " " + styles.solid}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
