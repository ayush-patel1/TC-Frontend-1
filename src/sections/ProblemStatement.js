import React,{useEffect} from "react";
import styles from './ProblemStatements.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProblemStatement = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
  <div>
      <div class={styles.headingContainer}>
        <div class={styles.heading2}>PROBLEM STATEMENTS</div>
      </div>
      <div class={`${styles.ProblemStatements} ${styles.container}`}>
        <div data-aos="fade-up" class={styles.branch}>B. ARCH</div>
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