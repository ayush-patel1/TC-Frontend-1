import React,{useEffect} from "react";
import styles from "./VigyaabCard.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Vigyaan_Card(props){
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos="zoom-in-up" className={styles.Mcards}>
            <img width="100%" src={props.vigyaan_img} className={styles.hehe} alt="Error"></img>
        </div>
    )
}
export default Vigyaan_Card;