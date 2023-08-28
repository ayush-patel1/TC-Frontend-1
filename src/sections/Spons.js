import React,{useEffect} from "react";
import styles from "./Spons.module.css";
import Card from "../components/SponsCardSec";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Spons = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={styles.container}>
      <div data-aos="fade-down" className={styles.page}>
        <div className={styles.top}></div>
      </div>
      <div className={styles.TopCards}>
        <div data-aos="zoom-in-up" className={styles.TCard}></div>
        <div data-aos="zoom-in-up" className={styles.TCard}></div>
      </div>
      <div className={styles.MiddleCards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    </div>
  );
};

export default Spons;
