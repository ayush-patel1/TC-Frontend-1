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
      <div className={`${styles.ProblemStatements} ${styles.container}`}>
        <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Arch'}`}>
          <div data-aos="flip-up" className={styles.branch}>
            B. ARCH
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'BioMed'}`}>
          <div data-aos="flip-up" className={styles.branch}>
            BIO-MED
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Biotech'}`}>
          <div data-aos="flip-up" className={styles.branch}>
            BIOTECH
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Chem'}`}>
          <div data-aos="flip-up" className={styles.branch}>
            CHEMICAL
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Civil'}`}>
          <div data-aos="flip-up" className={styles.branch}>
            CIVIL
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'CsItMca'}`}>
          <div data-aos="flip-up" className={styles.branch}>
            CSE / IT / MCA
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'ECE'}`}>
          <div data-aos="flip-up" className={styles.branch}>
            ECE
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'EE'}`}>
          <div data-aos="flip-up" className={styles.branch}>
            EE
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Mech'}`}>
          <div data-aos="flip-up" className={styles.branch}>
            MECH
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Meta'}`}>
          <div data-aos="flip-up" className={styles.branch}>
            META
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Mining'}`}>
          <div data-aos="flip-up" className={styles.branch}>
            MINING
          </div>
        </Link>

      </div>
    </div>
  );
};

export default ProblemStatement;
