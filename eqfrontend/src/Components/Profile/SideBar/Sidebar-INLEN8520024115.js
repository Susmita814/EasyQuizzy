import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faGamepad } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <FontAwesomeIcon icon={faUser} size="3x" />
        <h3>User Name</h3>
      </div>
      <ul className="menu">
        <li>
          <Link to="/profile" className="menu-link">
            <FontAwesomeIcon icon={faUser} />
            Profile
          </Link>
        </li>
        <li>
          <Link to="/game" className="menu-link">
            <FontAwesomeIcon icon={faGamepad} />
            Game
          </Link>
        </li>
        <li>
          <Link to="/settings" className="menu-link">
            <FontAwesomeIcon icon={faCog} />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
