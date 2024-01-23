import React from "react";
import "./home.scss";
import NavBar from "../components/navbar/navbar";
import Featured from "../components/featured/Featured";
import List from "../components/list/List";
import TopListPage from "../components/topList/TopList";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured type={"movie"} />
      <TopListPage />
      <List apiEndpoint='https://netflix-kwcy.onrender.com/api/movie/genremovie/659d311dd7634b61e1d2f66e' listTitle='Drama on Netflix' />
      <List apiEndpoint='https://netflix-kwcy.onrender.com/api/movie/genremovie/659d3162d7634b61e1d2f67c' listTitle='Anime you should like' />
    </div>
  );
};

export default Home;
