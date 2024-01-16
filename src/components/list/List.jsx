import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./list.scss";
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const List = ({ apiEndpoint, listTitle }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        if (response.data && response.data.data) {
          setMovies(response.data.data);
          console.log('Fetched data:', response.data.data);
        } else {
          console.error('Invalid data format in the response:', response);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NavigateNext />,
    prevArrow: <NavigateBefore />,
  };

  const handleImageClick = (movieId) => {
    console.log(movieId, "movieIdmovieId");
    navigate(`/movie/${movieId._id}`); // Use navigate instead of history.push
  };

  return (
    <div className='container'>
      <h2>{listTitle}</h2>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index} className='img-size' onClick={() => handleImageClick(movie)}>
            <img src={movie.titleImage[0]} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default List;
