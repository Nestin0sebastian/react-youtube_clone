import React, { useEffect, useState } from 'react';
import axios from '../axios'; // Adjusted the path
import { imageUrl } from '../constants/constants'; // Adjusted the path
import './rowPost.css';
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(err => {
        alert("NETWORK ISSUE");
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`)
      .then(response => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].key);
        } else {
          console.log('Array empty');
        }
      });
  };

  const closePlayer = () => {
    setUrlId('');
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie) => (
          <img
            onClick={() => {
              handleMovie(movie.id);
            }}
            key={movie.id}
            className={props.isSmall ? 'smallposter' : 'poster'}
            src={`${imageUrl}${movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {urlId && (
        <div className='youtube-player'>
          <YouTube opts={opts} videoId={urlId} />
          <button onClick={closePlayer} className='close-button'>Close</button>
        </div>
      )}
    </div>
  );
}

export default RowPost;
