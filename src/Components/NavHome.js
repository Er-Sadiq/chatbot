import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavHome() {
  const [theme, setTheme] = useState('dark'); // Initialize with 'dark'
  const [textColor, setTextColor] = useState('warning'); // Initialize with 'warning'
  const [mode, setMode] = useState('Dark Mode');
  
  const themeModeFunction = () => {
    if (theme === 'dark') {
      setTheme('light');
      setTextColor('primary');
      setMode('Light-Mode');
    } else {
      setTheme('dark');
      setTextColor('warning');
      setMode('Dark-Mode');
    }
  }
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${theme} body-tertiary`}>
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <span className={`fs-3 text-${textColor}`} style={{ marginLeft: '50px' }}>Intelli<span style={{ color: 'maroon' }}>Mood-AI</span></span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Add your navigation links here */}
            </ul>
            <button className={`btn btn-outline-${textColor} me-2`} type="button" onClick={themeModeFunction}>
              {mode}
            </button>
            <Link to="/"><button className={`btn btn-outline-${textColor}`} type="button" > 
              Sign-Up
            </button> </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
