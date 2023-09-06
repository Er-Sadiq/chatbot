import React from 'react';

function Footer() {
  const footerStyle = {
    borderTop: '2px solid #ccc',
    marginTop: '10px',
    // Gray gradient background
    backgroundColor: '#344150',
    color: 'white',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    height: '100%', // Set a fixed height to vertically center content
    padding: '10px 20px',
  };

  return (
    <footer className='fixed-bottom text-center' style={footerStyle}>
      <div style={containerStyle}>
        &copy; {new Date().getFullYear()} IntelliMood-AI
      </div>
    </footer>
  );
}

export default Footer;
