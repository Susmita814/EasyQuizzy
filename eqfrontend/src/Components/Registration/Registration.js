import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-router-dom';

import "./Registration.css"

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="Registration-page">
      <div className="Container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
          <div className="Icon"><FontAwesomeIcon icon={faAddressCard} size="3x"/></div> 
        <h2 className="login-title registration">Registration</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="form-labelr Rectangle4">Name:</label>
                  <input
                    type="text"
                    className="form-control Rectangle8"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required/>
                </div><br/>
              <div>
                <label htmlFor="email" className='form-labelr Rectangle5'>Email:</label>
                <input
                  type="email"
                  className="form-control Rectangle9"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div><br/>
              <div>
                <label htmlFor="inputPassword" className='form-labelr Rectangle6'>Password:</label>
                <input type="password" className="form-control Rectangle10" id="inputPassword" aria-labelledby="passwordHelpBlock" />
                {/* <div id="passwordHelpBlock" className="form-text text" >
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </div> */}
        </div><br/>
                <div>
          <label htmlFor="confirmPassword" className='form-labelr Rectangle7'>Confirm Password:</label>
          <input
            type="password"
            className="form-control Rectangle11"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div><br/>
        <button type="submit" className="Rectangle Submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}
