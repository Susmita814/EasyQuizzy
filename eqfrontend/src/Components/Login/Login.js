import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';

export default function Login({ setIsLoggedIn, isLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usenavigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8010/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      const user = users.find((user) => user.email === email);

      if (user) {
        if (user.password === password) {
          setIsLoggedIn(true);
          toast.success('Success');
          usenavigate('/home');
        } else {
          toast.error('Invalid password');
        }
      } else {
        toast.error('User not found');
      }
    }
  };

  const validate = () => {
    let result = true;
    if (email === '' || email === null) {
      result = false;
      toast.warning('Please Enter Email');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  };

  return (
    <>
      <div className="login-page">
        <div className="LRectangle2">
          <div className="Icon">
            <FontAwesomeIcon icon={faUser} size="3x" />
          </div>
          <h2 className="login-title login">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="login-label LRectangle4">
                Username:
              </label>
              <input
                type="email"
                className="form-control LRectangle6"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="password" className="login-label login-label LRectangle5">
                Password:
              </label>
              <input
                type="password"
                className="form-control form-control LRectangle7"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-success login-button LRectangle Login">
              Login
            </button>
            <label className="Remember">
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
              Remember me
            </label>
            <Link className="Forgot" to="/">
              forget password?
            </Link>
            <Link className="create" to="/registration">
              create new account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
