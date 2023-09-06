// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TheBotPage from './Components/TheBotPage'; // Import the Chatbot component
import LandingPage from './Components/LandingPage';
import About from './Components/About';

function App() {
  // Your existing code for theme and toggleSidebar can remain here
  
  return (
    <Router>
      <Routes>
         <Route path= "/" element= {<LandingPage/>} />
        <Route path="/TheBotPage" element={<TheBotPage />} />
        <Route path="/About" element={<About/>} />
      </Routes>

 
      
    </Router>
  );
}

export default App;
