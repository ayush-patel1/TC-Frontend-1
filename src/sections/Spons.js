import React,{useEffect} from "react";
import styles from "./Spons.module.css";
import Card from "../components/SponsCardSec";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spons_data from "../assets/spons_data";

const Spons = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={styles.container}>
      <div data-aos="fade-down" className={styles.page}>
        <div className={styles.top}></div>
      </div>
      <div data-aos="fade-down" className="fn_cs_desc">
          <p>
          In the past, 'Aavartan' has been fortunate to have the support and sponsorship of industry giants like CSPDCL, and Wipro. Their generous contributions and partnership have played a pivotal role in making Aavartan a grand success. These esteemed sponsors not only provided financial support but also shared their expertise, technology, and innovative solutions with our participants, adding immense value to the Aavartan experience. 
          </p>
        </div>
      <div className={styles.MiddleCards}>
       {Spons_data.map((data)=>{
        return(
          <Card
          spons_img={data.url}
          ></Card>
        );
       })}
        </div>
    </div>
  );
};

export default Spons;
