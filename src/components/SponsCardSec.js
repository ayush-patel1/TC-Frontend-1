import React,{useEffect} from "react";
import styles from "./SponsCard.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card(){
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos="zoom-in-up" className={styles.Mcards}></div>
    )
}
export default Card;