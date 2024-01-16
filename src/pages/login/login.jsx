import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import './login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
 const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const { token } = await response.json();

      // Store the token in your application state or local storage
      localStorage.setItem('token', token);

      // Display success message
      setSuccessMessage('Login successful. Redirecting to home...');

      // Redirect to home page after a delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <>
      <div className="login-background">
        <div className="loginlogo">
          <img src="../../assets/images/logo.png" alt="" />
        </div>

        <div className="loin-container">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <input type="submit" value="Sign In" />
            <input type="checkbox" />
            <label>Remember me</label>
            <a href="#">Need help?</a>
          </form>
          <div className="content">
            <h2>
              New to Netflix? <a href="/register">Sign up now.</a>
            </h2>
            <br />
            <h2>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </h2>
          </div>
        </div>
      </div>

     <div className='alert'>
       {error && (
        <Alert icon={<CheckIcon fontSize="inherit" />} className="custom-alert" severity="error">
          {error}
        </Alert>
      )}

      {successMessage && (
        <Alert icon={<CheckIcon fontSize="inherit" />} className="custom-alert" severity="success">
          {successMessage}
        </Alert>
      )}
     </div>
    </>
  );
};

export default Login;
