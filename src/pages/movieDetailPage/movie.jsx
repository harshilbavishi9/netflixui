import React from "react";
import "./movie.scss";
import NavBar from "../../components/navbar/navbar";
import MovieBanner from "../../components/MovieBanner/MovieBanner";
import MoreDetails from "../../components/moreDetails/MoreDetails";

const Movie = () => {
  return (
    <div className="home">
      <NavBar />
      <MovieBanner />
      <MoreDetails/>
    </div>
  );
};

export default Movie;
