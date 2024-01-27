import React from "react";
import "./home.scss";
import NavBar from "../components/navbar/navbar";
import Featured from "../components/featured/Featured";
import List from "../components/list/List";
import TopListPage from "../components/topList/TopList";
import Footer from "../components/footer/Footer";
import MovieBanner from "../components/MovieBanner/MovieBanner";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured type={"movie"} />
      <TopListPage />
      <List apiEndpoint='659d311dd7634b61e1d2f66e' listTitle='Drama on Netflix' />
      <List apiEndpoint='659d3162d7634b61e1d2f67c' listTitle='Anime you should like' />
      <List apiEndpoint='659d3110d7634b61e1d2f668' listTitle='Action you should like' />
      <List apiEndpoint='659d3114d7634b61e1d2f66a' listTitle='Adventure you should like' />
      <List apiEndpoint='659d3118d7634b61e1d2f66c' listTitle='Comedy you should like' />
      <List apiEndpoint='659d3121d7634b61e1d2f670' listTitle='Horror you should like' />
      <List apiEndpoint='659d3129d7634b61e1d2f672' listTitle='Romance you should like' />
      <List apiEndpoint='659d3139d7634b61e1d2f674' listTitle='Science fiction you should like' />
      <List apiEndpoint='659d3144d7634b61e1d2f678' listTitle='Historical you should like' />
      <List apiEndpoint='659d3149d7634b61e1d2f67a' listTitle='Crime you should like' />
      <Footer/>
    </div>
  );
};

export default Home;
