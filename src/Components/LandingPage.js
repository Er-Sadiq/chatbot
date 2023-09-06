import React, { useEffect, useState } from 'react';
import NavHome from './NavHome';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import MainBotForm from './MainBotFrom';

export default function LandingPage() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    document.body.style.backgroundImage = `url(${require('./images/landingbg.jpg')})`;
    document.body.style.backgroundSize = 'auto';

    // Add this line to hide the scrollbar
    document.body.style.overflow = 'hidden';

    return () => {
      // Clean up the styles if needed when the component unmounts
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';

      // Remove the overflow hidden style when the component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <NavHome />
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="card" style={{ backgroundColor: '#f4f4f4', maxWidth: '420px', marginBottom: '200px' }}>
          <div className="card-body">
            <h1 className="card-title mb-4">
              <span className="fs-1">
                Intelli<span style={{ color: 'maroon' }}>Mood-AI</span>
              </span>
            </h1>
            <p className="card-text" style={{ color: 'maroon' }}>
              Your 24/7 Companion for a Happier You!.
            </p>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Enter your Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <Link to="/TheBotpage">
              <button className="btn btn-warning me-2 " disabled={!username} onClick={() => {
                // Handle the button click here, e.g., navigate to /TheBotpage
              }}>
                Guest Login
              </button>
            </Link>
            <button
              className="btn btn-warning me-2"
              onClick={() => {
                setUsername('');
              }}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
