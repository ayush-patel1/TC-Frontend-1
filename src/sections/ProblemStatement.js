import React from 'react'
import styles from './ProblemStatements.module.css'

const ProblemStatement = () => {
  return (
  <div>
      <div class={styles.headingContainer}>
        <div class={styles.heading2}>PROBLEM STATEMENTS</div>
      </div>
      <div class={styles.ProblemStatements}>
        <div class={styles.branch}>B. ARCH</div>
        <div class={styles.branch}>BIO-MED</div>
        <div class={styles.branch}>BIOTECH</div>
        <div class={styles.branch}>CHEMICAL</div>
        <div class={styles.branch}>CIVIL</div>
        <div class={styles.branch}>CSE</div>
        <div class={styles.branch}>ECE</div>
        <div class={styles.branch}>EE</div>
        <div class={styles.branch}>IT</div>
        <div class={styles.branch}>MCA</div>
        <div class={styles.branch}>MECH</div>
        <div class={styles.branch}>META</div>
        <div class={styles.branch}>MINING</div>
      </div>
  </div>
  )
}

export default ProblemStatement