import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import GamePage from '../GamePage/GamePage';
import './ProfilePage.css';

const ProfilePage = ({ setIsLoggedIn }) => {
  return (
    <div className="profile-page">
      <Sidebar/>
      <div className="gamepage-container">
        <GamePage setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
};

export default ProfilePage;
