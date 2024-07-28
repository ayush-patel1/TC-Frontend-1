import React from 'react';
import './alertScreen.css';

const SplashScreen = ({ onClose }) => {
  return (
    <div className="splashscreen-overlay">
      <div className="splashscreen-content">
        <h1>Whoops!!</h1>
        <h2>Looks like you haven't registered for the Vigyaan!</h2>
        <p>Take me to the registration form page.</p>
        <button onClick={onClose}>Go to Registration</button>
      </div>
    </div>
  );
};

export default SplashScreen;