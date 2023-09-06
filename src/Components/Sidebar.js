import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Sidebar(props) {
  return (
    <div className={`sidebar d-flex justify-content-between flex-column bg-${props.theme} text-${props.textColor} py-3 ps-3 pe-5`} style={{ height: '100vh' }}>
      <div>
        
          <span className='fs-3'>Intelli<span style={{ color: 'maroon' }}>Mood-AI</span></span>
        
        <hr className={`text-${props.textColor} mt-2`} />
        <ul className="nav nav-pills flex-column text-light mt-2">
          <li className="nav-item">
            <button className={`btn text-${props.textColor} p-3`}>
              <i className="bi bi-house me-2 fs-5"></i>
              <span className="fs-5"> Home</span>
            </button>
          </li>
          <li className="nav-item">
            <button className={`btn text-${props.textColor} p-3`}>
              <i className="bi bi-person-circle me-2 fs-5"></i>
              <span className="fs-5"> User</span>
            </button>
          </li>
          <li className="nav-item">
            <Link to="/About"> {/* Use Link to navigate */}
              <button className={`btn text-${props.textColor} p-3`}>
                <i className="bi bi-info-circle me-2 fs-5"></i>
                <span className="fs-5"> About</span>
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <button className={`btn text-${props.textColor} p-3`}>
              <i className="bi bi-folder-plus me-2 fs-5"></i>
              <span className="fs-5"> Suggestion</span>
            </button>
          </li>
        </ul>
      </div>

      <div>
        <hr className={`text-${props.textColor}`} />
        <ul style={{ listStyle: 'none' }}>
          <li className="nav-item">
            <button className={`btn text-${props.textColor} p-1`}>
              <i className="bi bi-gear me-2 fs-6"></i>
              <span className="fs-6"> Settings</span>
            </button>
          </li>
          <li className="nav-item">
            <button className={`btn text-${props.textColor} p-1`}>
              <i className="bi bi-bug me-2 fs-6"></i>
              <span className="fs-6"> Report</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
