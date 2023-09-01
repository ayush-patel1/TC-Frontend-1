import React,{useEffect} from "react";
import styles from './ProblemStatements.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from "../components/Title"
import { Link } from "react-router-dom";

const ProblemStatement = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const color="PROBLEM";
  const noncolor="STATEMENTS";
  return (
  <div className={styles.container}>
      <Title color={color} noncolor={noncolor}/>
      <div class={`${styles.ProblemStatements} ${styles.container}`}>
        <Link style={{textDecoration:"none"}}to="/vigyaan/statements">
        <div data-aos="fade-up" class={styles.branch}>B. ARCH</div>
        </Link>
        <div data-aos="fade-up" class={styles.branch}>BIO-MED</div>
        <div data-aos="fade-up" class={styles.branch}>BIOTECH</div>
        <div data-aos="fade-up" class={styles.branch}>CHEMICAL</div>
        <div data-aos="fade-up" class={styles.branch}>CIVIL</div>
        <div data-aos="fade-up" class={styles.branch}>CSE</div>
        <div data-aos="fade-up" class={styles.branch}>ECE</div>
        <div data-aos="fade-up" class={styles.branch}>EE</div>
        <div data-aos="fade-up" class={styles.branch}>IT</div>
        <div data-aos="fade-up" class={styles.branch}>MCA</div>
        <div data-aos="fade-up" class={styles.branch}>MECH</div>
        <div data-aos="fade-up" class={styles.branch}>META</div>
        <div data-aos="fade-up" class={styles.branch}>MINING</div>
      </div>
  </div>
  )
}

export default ProblemStatement