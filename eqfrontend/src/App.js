import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNav from './Components/MainNav/MainNav';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Home from './Components/Home/Home';
//import About from './Components/About/About';
import './App.css';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
