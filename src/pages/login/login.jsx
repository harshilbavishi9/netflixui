import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      console.log(response.status);
      if (response.status === 401) {
        toast.error('Plese filed all feild.', {
          position: 'top-right',
          autoClose: 2000,
        });
        return
      }
      if (!response.ok) {
        throw new Error('Login failed');
      }

      const { token } = await response.json();

      localStorage.setItem('token', token);

      if (response.status === 200) {
        toast.success('Login successful. Redirecting to home...', {
          position: 'top-right',
          autoClose: 2000,
        });
      }
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <div className="bg-slate-900">
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
    </>
  );
};

export default Login;
