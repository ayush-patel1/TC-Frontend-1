import React from 'react';

const ScrollButton = ({ destinationId }) => {
  const scrollToDestination = () => {
    const targetElement = document.getElementById(destinationId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="btn-container" style={{ display: 'flex', paddingBottom: '3rem', justifyContent: 'center' }}>
      <span
        className="scroll-btn"
        onClick={scrollToDestination}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '1rem 2rem', // Increased padding for larger button
          border: '2px solid #FFFFFF', // White border
          borderRadius: '4px',
          cursor: 'pointer',
          textAlign: 'center',
          backgroundColor: 'transparent', // Transparent background
          color: '#FFFFFF', // White text color
          fontWeight: 'bold',
          userSelect: 'none',
          fontSize: '1.25rem', // Increased font size
          lineHeight: '1.5', // Adjust line height for better spacing
          transition: 'background-color 0.3s, color 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#FFFFFF'; // White background on hover
          e.currentTarget.style.color = '#000000'; // Black text color on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'; // Original background on leave
          e.currentTarget.style.color = '#FFFFFF'; // Original text color on leave
        }}
      >
        Download the PDF for more info
      </span>
    </div>
  );
};

export default ScrollButton;
