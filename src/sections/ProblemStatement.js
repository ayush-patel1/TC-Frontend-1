import React, { useEffect } from "react";
import styles from "./ProblemStatements.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const ProblemStatement = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
      <Title color={"PROBLEM"} noncolor={"STATEMENTS"} />
      <div class={`${styles.ProblemStatements} ${styles.container}`}>
        <Link style={{ textDecoration: "none" }} to={{ pathname: '/vigyaan/statements', state: { data: 'Arch' } }}>
          <div
            data-aos="fade-up"
            className={styles.branch}
          >
            B. ARCH
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={{ pathname: '/vigyaan/statements/biomed', state: { data: 'BioMed' } }}>
          <div data-aos="fade-up" class={styles.branch} >
            BIO-MED
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={{ pathname: '/vigyaan/statements', state: { data: 'Biotech' } }}>
          <div data-aos="fade-up" class={styles.branch} >
            BIOTECH
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={{ pathname: '/vigyaan/statements', state: { data: 'Chem' } }}>
          <div data-aos="fade-up" class={styles.branch}>
            CHEMICAL
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={{ pathname: '/vigyaan/statements', state: { data: 'Civil' } }}>
          <div data-aos="fade-up" class={styles.branch}>
            CIVIL
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={{ pathname: '/vigyaan/statements', state: { data: 'CsItMca' } }}>
          <div data-aos="fade-up" class={styles.branch} >
            CSE / IT / MCA
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={{ pathname: '/vigyaan/statements', state: { data: 'ECE' } }}>
          <div data-aos="fade-up" class={styles.branch}>
            ECE
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={{ pathname: '/vigyaan/statements', state: { data: 'EE' } }}>
          <div data-aos="fade-up" class={styles.branch} >
            EE
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={{ pathname: '/vigyaan/statements', state: { data: 'Mech' } }}>
          <div data-aos="fade-up" class={styles.branch} >
            MECH
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={{ pathname: '/vigyaan/statements', state: { data: 'Meta' } }}>
          <div data-aos="fade-up" class={styles.branch}>
            META
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={{ pathname: '/vigyaan/statements', state: { data: 'Mining' } }}>
          <div data-aos="fade-up" class={styles.branch}>
            MINING
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProblemStatement;
