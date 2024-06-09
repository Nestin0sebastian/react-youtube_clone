import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../constants/constants'
import { imageUrl} from '../../constants/constants'

import axios from '../../axios'
import './banner.css'
function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[0]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='banner' style={{
      backgroundImage: `url(${movie ? `${imageUrl}${movie.backdrop_path}` : ''})`,
    }}>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title || movie.name || movie.original_name : 'Loading...'}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : 'Loading description...'}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;