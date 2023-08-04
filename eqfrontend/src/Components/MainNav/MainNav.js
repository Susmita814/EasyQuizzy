import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './MainNav.css';
import { Link } from 'react-router-dom';

export default function MainNav(props) {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    // Handle the logout action here
    // You can perform any additional logout logic here
    setShowLogoutPopup(false); // Close the popup
    props.handleLogout(); // Call the handleLogout function from props
  };

  return (
    <nav className="Desktop">
      <div className="EasyQuizzy">
        <Link className="navbar-brand EasyQuizzy" to="/">
          {props.title}
        </Link>
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
        <div className="Home">
          <Link className="navbar-brand Home" to="/home">
            {props.home}
          </Link>
        </div>
        <div className="About">
          <Link className="navbar-brand About" to="/about">
            {props.about}
          </Link>
        </div>
        <div className="Contacts">
          <Link className="navbar-brand Contacts" to="/contacts">
            {props.contacts}
          </Link>
        </div>
        <div className="Login">
          {props.isLoggedIn ? (
            <div className="icon-container">
              {showLogoutPopup && (
                <div className="overlay" onClick={() => setShowLogoutPopup(false)}></div>
              )}
              <div
                className="logout-popup logout-popup p"
                style={{
                  display: showLogoutPopup ? 'block' : 'none',
                  zIndex: showLogoutPopup ? 1000 : -1,
                }}
              >
                <p>Are you sure you want to logout?</p>
                <button onClick={handleLogout}>Confirm</button>
                <button onClick={() => setShowLogoutPopup(false)}>Cancel</button>
              </div>
              <Link
                className="Icon1"
                to="#"
                onClick={() => setShowLogoutPopup(!showLogoutPopup)}
              >
                <FontAwesomeIcon icon={faSignOutAlt} size="3x" style={{ color: 'white' }} />
              </Link>
            </div>
          ) : (
            <Link className="Icon1" to="/login">
              <FontAwesomeIcon icon={faUserPlus} size="3x" style={{ color: 'white' }} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
