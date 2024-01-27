import React from "react";
import "./movie.scss";
import NavBar from "../../components/navbar/navbar";
import MovieBanner from "../../components/MovieBanner/MovieBanner";
import MoreDetails from "../../components/moreDetails/MoreDetails";
import Footer from "../../components/footer/Footer";

const Movie = () => {
  return (
    <div className="home">
      <NavBar />
      <MovieBanner />
      <MoreDetails/>
      <Footer/>
    </div>
  );
};

export default Movie;
