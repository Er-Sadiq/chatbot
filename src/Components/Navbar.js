import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
        <div className="container-fluid">
          <a className="navbar-brand d-none d-md-block" href="#">
            
          </a>
          <a className="navbar-brand d-block d-md-none" onClick={props.toggleSidebar} href="#">
            <i className="bi bi-justify"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>

            <button
              className={`btn btn-outline-${props.textColor} me-2`}
              type="button"
              onClick={props.themeModeFunction}
            >
              <i className="bi bi-moon-stars"></i> {props.mode}
            </button>
           <Link to="/"> <button className={`btn btn-outline-${props.textColor}`} type="button">
              <i className="bi bi-box-arrow-left"></i> LogOut
            </button></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
