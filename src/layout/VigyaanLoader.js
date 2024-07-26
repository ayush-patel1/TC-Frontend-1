import React, { useEffect } from 'react';
import styles from './VigyaanLoader.module.css';

const VigyaanLoader = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.cont}>
        <div className={styles.paper}></div>
        <button>
          <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          Submitting...
        </button>
      </div>
    </div>
  );
};

export default VigyaanLoader;
