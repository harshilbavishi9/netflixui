import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./list.scss";
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const List = ({ apiEndpoint, listTitle }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await axios.get(apiEndpoint);
      if (response.data && response.data.data) {
          setMovies(response.data.data);
        } else {
          console.error('Invalid data format in the response:', response);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NavigateNext />,
    prevArrow: <NavigateBefore />,
     responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },  
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleImageClick = (movieId) => {
    console.log(movieId, "movieIdmovieId");
    navigate(`/movie/${movieId._id}`);
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
