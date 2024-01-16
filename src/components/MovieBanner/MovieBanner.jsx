import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Info, PlayArrow } from "@mui/icons-material";
import "./MovieBanner.scss";

export default function MovieBanner({ type }) {

  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/movie/${id}`);
        setMovieDetails(response.data.data); // Adjust based on your API response structure
        console.log('Fetched movie details:', response.data.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    // Return some loading state or placeholder if movieDetails is still null
    return <div>Loading...</div>;
  }

  return (
    <div className='movie-container'>
      <div className="featured">
        {movieDetails.image && (
          <img src={movieDetails.image[0]} alt={movieDetails.title} className='moviebannerImage'/>
        )}
        <div className="info">
          {movieDetails.logo && (
            <img src={movieDetails.logo[0]} alt={movieDetails.title} className='logoImage' />
          )}
          <span className="title">
            {movieDetails.title}
          </span>
          <span className="desc">
            {movieDetails.description}
          </span>
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="more">
              <Info />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
