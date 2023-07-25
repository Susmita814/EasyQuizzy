import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import "./Login.css"


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  return (
    <>
      <div className="login-page">
      <div className="Rectangle2">
      <div className="Icon"><FontAwesomeIcon icon={faUser} size="3x"/></div> 
        <h2 className="login-title login">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="login-label Rectangle4">Username:</label>
          <input type="text" className="form-control Rectangle6" id="username" name="username" value={username} onChange={handleUsernameChange} />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="password" className="login-label Rectangle5">Password:</label>
          <input type="password" className="form-control Rectangle7" id="password" name="password" value={password} onChange={handlePasswordChange} />
        </div>
        <br/>
      <button type="submit" className="btn btn-success login-button Rectangle Login">Login</button>
      <label className='Remember'>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        Remember me
      </label>
          <a className="Forgot" href="/">forget password?</a>
          <a className="create" href="/">create new account</a>
      </form>
      </div>
    </div>
    </>
  )
}
