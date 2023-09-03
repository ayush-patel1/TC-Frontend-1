import React from 'react';
import styles from './Button.module.css'

const Button = () => {
    const scrollToRegistration = () => {
        const registrationElement = document.getElementById('registration');
        if (registrationElement) {
            registrationElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={styles.wrap}>
            <button className={styles.button} onClick={scrollToRegistration}>
                Register
            </button>
        </div>
    )
}

export default Button;