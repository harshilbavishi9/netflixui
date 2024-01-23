import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.scss';

const Register = () => {
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setusername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
     toast.error('Please filed all feild.', {
        position: 'top-right',
        autoClose: 2000,
      });
      return 
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      toast.success('Registration successful. Redirecting to login...', {
        position: 'top-right',
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      toast.error('Registration failed. Please try again.', {
        position: 'top-right',
        autoClose: 2000,
      });
      console.error('Registration error:', error);
    } finally {
      console.log('Registration  completed');
    }
  };

  return (
    <>
      <div className='background'>
        <div className="register-container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit} className='form'>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            <a href="#">Need help?</a>
            <input type="submit" value="Sign up" />
          </form>
          <div className="content">
            <h2>New to Netflix? <a href="/login">Sign in now.</a></h2>
            <br />
            <h2>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
