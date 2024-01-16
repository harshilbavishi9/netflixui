import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import MovieDetails from './pages/movieDetailPage/movie';
import './app.scss'
import Login from './pages/login/login';
import Register from './pages/register/register';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
