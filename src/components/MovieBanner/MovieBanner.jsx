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
        const response = await axios.get(`https://netflix-kwcy.onrender.com/api/movie/${id}`);
        setMovieDetails(response.data.data);
        console.log(response.data.data)
        console.log('Fetched movie details:', response.data.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='movie-container'>
      <div className="featured">
        <div className='moviebanner-image'>
          {movieDetails.image && (
            <img src={movieDetails.image[0]} alt={movieDetails.title} className='moviebannerImage' />
          )}
        </div>
        <div className="info">
          {movieDetails.logo && (
            <img src={movieDetails.logo[0]} alt={movieDetails.title} className='logoImage' />
          )}
          <div className='movie-info'>
            <h1>{movieDetails.title}</h1>
            <div className='title-info-wrapper'>
              <span className='none'>{movieDetails.year}</span>
              <span>|</span>
              <span>{movieDetails.genre.length === 1 ? movieDetails.genre.map((genre) => genre.title) : movieDetails.genre.map((genre) => genre.title + ', ')}</span>
              <span>|</span>
              <span>{movieDetails.seasons.length === 0 ? movieDetails.duration + " minutes" : movieDetails.seasons.length + " Season"}</span>
              <span>|</span>
              <span>{movieDetails.language.map((item) => item)}</span>
            </div>
            {/* <div className="info-description"> */}
              <p>{movieDetails.description}</p><br/>
              <span>Starring :</span><p>{movieDetails.cast}</p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
