import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainBotForm from './MainBotFrom'; // Corrected the import path
import Footer from './Footer';
import About from './About'; // Import the About component

function Chatbot() {
  const [toggle, setToggle] = useState(false);

  function toggleSidebar() {
    setToggle(!toggle);
  }
  
  const [theme, setTheme] = useState('dark'); // Initialize with 'dark'
  const [textColor, setTextColor] = useState('warning'); // Initialize with 'warning'
  const [mode, setMode] = useState('Dark Mode');
  const [showAbout, setShowAbout] = useState(false); // State variable for About component

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
    <div className="d-flex"> 
      {/* Sidebar */}
      <div className={toggle ? "d-none" : "w-auto position-fixed"}>
        <Sidebar theme={theme} textColor={textColor} setShowAbout={setShowAbout} /> {/* Pass setShowAbout as a prop */}
      </div>

      <div className={toggle ? "d-none" : "invisible"}>
        <Sidebar theme={theme} textColor={textColor} setShowAbout={setShowAbout} /> {/* Pass setShowAbout as a prop */}
      </div>

      <div className="flex-grow-1">
        <Navbar
          toggleSidebar={toggleSidebar}
          theme={theme}
          textColor={textColor}
          themeModeFunction={themeModeFunction}
          mode={mode}
        />
        
        {/* Conditionally render MainBotForm or About based on showAbout state */}
        {showAbout ? <About /> : <MainBotForm toggleSidebar={toggleSidebar} />}
      </div>
    </div>
  );
}




export default Chatbot;
