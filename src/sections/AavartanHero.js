import React from 'react';
import './AavartanHero.css';
// import ParticlesBackground from '../layout/ParticlesBackground';
import WaterWave from 'react-water-wave'; // Import react-water-wave

const AavartanHero = () => {
  return (
    <section className="hero">
      <WaterWave
        // imageUrl="/your-image-url.jpg" // Replace with your image URL
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {(methods) => (
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                <span>AAVARTAN</span>
              </h1>
              <p>
                AAVARTAN is the annual Techfest of NIT Raipur organised by Team Technocracy, with more than 30 events. It is a two day annual symposium of NIT Raipur, by far the largest Techfest of central India.
              </p>
            </div>
          </div>
        )}
      </WaterWave>
    </section>
  );
};

export default AavartanHero;
