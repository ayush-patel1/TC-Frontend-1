import React from 'react';
import namesData from './../assets/executives.json'; // Import the JSON data

import './Executive.css';

const executiveTitleStyles = {
  WebkitTextFillColor: 'transparent',
  textFillColor: 'transparent',
  background: 'linear-gradient(181.93deg, #fff 1.63%, #6535b4 165.65%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  fontFamily: 'ClashDisplay',
  fontSize: '3.5rem',
  fontVariationSettings: '"wght" 700',
  margin: '20vh 0 5vh',
  textTransform: 'uppercase',
};

const Executive = () => {
  const columnStyles = {
    fontFamily: 'sans-serif',
    display: 'block',
    fontSize: '1.5em',
    marginBlockStart: '0.83em',
    marginBlockEnd: '0.83em',
    marginInlineStart: '80px',
    marginInlineEnd: '0px',
    fontWeight: 'bold',
  };

  const listStyles = {
    fontSize: '1.2em',
    marginBottom: '5px',
  };

  const paddingBelowHeading = {
    paddingBottom: '10px',
  };

  const domains = [
    'Media and Public Relation',
    'Sponsorship',
    'Vigyaan',
    'Documentation',
    'Event Management',
    'Tech',
    'Design and Editing',
  ];

  return (
    <>
      <div style={executiveTitleStyles}>
        <h1>Executives</h1>
      </div>
      <div className="executive-container" style={{ display: 'flex' }}>
        {domains.slice(0, 4).map((domain, domainIndex) => (
          <div
            key={domainIndex}
            className="executive-column"
            style={{ flex: '1', margin: '10px', marginLeft: '15px', marginRight: '20px' }}
          >
            <h2 style={{ ...columnStyles, ...paddingBelowHeading }}>{domain}</h2>
            <ul style={{ paddingLeft: '80px' }}>
              {namesData[domain].map((name, i) => (
                <li key={i} style={listStyles}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="executive-container" style={{ display: 'flex' }}>
        {domains.slice(4).map((domain, domainIndex) => (
          <div
            key={domainIndex}
            className="executive-column"
            style={{ flex: '1', margin: '10px', marginLeft: '15px', marginRight: '20px' }}
          >
            <h2 style={{ ...columnStyles, ...paddingBelowHeading }}>{domain}</h2>
            <ul style={{ paddingLeft: '80px', paddingBottom: '30px' }}>
              {namesData[domain].map((name, i) => (
                <li key={i} style={listStyles}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Executive;
