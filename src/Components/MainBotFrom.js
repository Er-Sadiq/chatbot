import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';

export default function MainBotForm(props) {
  // Moved the background style changes to useEffect to ensure they are applied after rendering.
  useEffect(() => {
    document.body.style.backgroundImage = `url(${require('./images/landingbg.jpg')})`;
    document.body.style.backgroundSize = 'auto';
  }, []);

  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendClick = () => {
    setDisplayText(inputText);
    setInputText('');
  };

  const handleClearClick = () => {
    setDisplayText('');
    setInputText('');
  };

  const textareaStyle = {
    resize: 'none',
    border: '2px solid #ccc',
    borderRadius: '15px',
  };

  const chatBoxStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px #888',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h3>{props.username}</h3> {/* Corrected prop name to username */}
        <h4 className="fw-bold">
          Start <span className="text-primary">Chatting...</span>
        </h4>
      </div>
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="mb-4" style={chatBoxStyle}>
            <h5>"Hey, we're all ears! What's on your mind?"</h5>
            <textarea
              className="form-control"
              rows="12"
              placeholder="Display area"
              value={displayText}
              readOnly
              style={textareaStyle}
            ></textarea>
            <textarea
              className="form-control mt-3"
              rows="2"
              placeholder="Enter your message here"
              value={inputText}
              onChange={handleInputChange}
              style={textareaStyle}
            ></textarea>
            <div style={buttonContainerStyle}>
              <button
                className={`btn btn-${props.textColor} me-3 btn-lg`}
                onClick={handleSendClick}
              >
                <i className="bi bi-send"></i>
              </button>
              <button
                className={`btn btn-${props.textColor} me-3 btn-lg`}
                onClick={handleClearClick}
              >
                <i className="bi bi-trash"></i>
              </button>
              <button
                className={`btn btn-${props.textColor} me-4 btn-lg`}
                onClick={props.toggleSidebar}
              >
                <i className="bi bi-sliders2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
