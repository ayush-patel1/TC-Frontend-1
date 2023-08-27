  import React from 'react'
  import { useState } from 'react'
  import logoImage from '../other/TC Logo White 1.jpg';
  import styles from './Navbar.module.css'

  const Navbar = () => {

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (itemName) => {
      setHoveredItem(itemName);
    };

    const handleMouseLeave = () => {
      setHoveredItem(null);
    };

    return (
      <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logoImage} alt="Logo" />
        </div>
        <ul className={styles.navList}>

          <li className={styles.navItem}
              onMouseEnter={() => handleMouseEnter('HOME')} 
              onMouseLeave={handleMouseLeave}>
              HOME 
              {hoveredItem === 'HOME' && (
              <div
                className={styles.rectangle}
                style={{ width: '40%' }}
                />
              )}
          </li>

          <li className={styles.navItem}
              onMouseEnter={() => handleMouseEnter('AAVARTAN')} 
              onMouseLeave={handleMouseLeave}>
              AAVARTAN 
              {hoveredItem === 'AAVARTAN' && (
              <div
                className={styles.rectangle}
                style={{ width: '40%' }}
                />
              )}
          </li>

          <li className={styles.navItem}
              onMouseEnter={() => handleMouseEnter('VIGYAAN')} 
              onMouseLeave={handleMouseLeave}>
              VIGYAAN 
              {hoveredItem === 'VIGYAAN' && (
              <div
                className={styles.rectangle}
                style={{ width: '40%' }}
                />
              )}
          </li>
        </ul>
      </nav>
      <div className={styles.title}>TECHNOCRACY</div>
      </>
    )
  }

  export default Navbar