import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faGamepad, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const [profilePicture, setProfilePicture] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/768px-Windows_10_Default_Profile_Picture.svg.png?20221210150350');
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    // Fetch picture URLs from pic.json
    fetch('pic.json')
      .then((response) => response.json())
      .then((data) => {
        setPictures(data);
        setProfilePicture(data[0]); // Set the first picture as the initial profile picture
      })
      .catch((error) => {
        console.error('Error fetching picture data:', error);
      });
  }, []);

  const handlePictureChange = (newPicture) => {
    setProfilePicture(newPicture);
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <div className="profile-picture">
          <img src={profilePicture} alt="Profile" />
          <div className="edit-delete-buttons">
            <button className="edit-button">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="delete-button">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
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
