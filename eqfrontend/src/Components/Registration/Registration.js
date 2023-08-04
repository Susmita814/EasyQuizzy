import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Password validation
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/;
  if (!passwordPattern.test(formData.password)) {
    toast.error(
      'Password must be at least 5 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.'
    );
    return;
  }

    // Email validation using regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(formData.email)) {
    toast.error('Invalid email address');
    return;
  }

  // Check if email already exists (You can replace this with your own logic to check if the email is already registered)
  try {
    const response = await fetch(`http://localhost:8010/users?email=${formData.email}`);
    const data = await response.json();
    if (data.length > 0) {
      toast.error('This email is already registered. Please use a different email.');
      return;
    }
  } catch (error) {
    toast.error('Failed to check email availability. Please try again.');
    return;
  }

  // If all validations pass, continue with registration
  try {
    const res = await fetch('http://localhost:8010/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      toast.success('Registered successfully.');
      navigate('/login');
    } else {
      toast.error('Failed to register. Please try again.');
    }
  } catch (error) {
    toast.error('Failed: ' + error.message);
  }
};

return (
    <div className='Registration-page'>
      <div className='Container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='Icon'>
              <FontAwesomeIcon icon={faAddressCard} size='3x' />
            </div>
            <h2 className='login-title registration'>Registration</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name' className='form-labelr Rectangle4'>
                  Name:
                </label>
                <input
                  type='text'
                  className='form-control Rectangle8'
                  name='name'
                  id='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <label htmlFor='email' className='form-labelr Rectangle5'>
                  Email:
                </label>
                <input
                  type='email'
                  className='form-control Rectangle9'
                  name='email'
                  id='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <label htmlFor='inputPassword' className='form-labelr Rectangle6'>
                  Password:
                </label>
                <input
                  className='form-control Rectangle10'
                  type='password'
                  id='inputPassword'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  minLength={8}
                  required
                />
                <div id='passwordHelpBlock' className='text'>
                  Your password must be 8 characters or more.
                </div>
              </div>
              <br />
              <div>
                <label htmlFor='confirmPassword' className='form-labelr Rectangle7'>
                  Confirm Password:
                </label>
                <input
                  className='form-control Rectangle11'
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <button type='submit' className='Rectangle Submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
