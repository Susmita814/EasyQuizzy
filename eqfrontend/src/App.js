import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNav from './Components/MainNav/MainNav';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Home from './Components/Home/Home';
//import About from './Components/About/About';
import './App.css';
import Sidebar from './Components/Profile/Sidebar/Sidebar';
import ProfilePage from './Components/Profile/ProfilePage/ProfilePage';
import GamePage from './Components/Profile/GamePage/GamePage';
import About from './Components/About/About';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <MainNav
          title="EasyQuizzy"
          home="Home"
          about="About"
          contacts="Contacts"
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/sidebar" element={<Sidebar />} />
          <Route exact path="/gamepage" element={<GamePage />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
