import React from "react";
import "./movie.scss";
import NavBar from "../../components/navbar/navbar";
import MovieBanner from "../../components/MovieBanner/MovieBanner";

const Movie = () => {
  return (
    <div className="home">
      <NavBar />
      <MovieBanner />
    </div>
  );
};

export default Movie;
