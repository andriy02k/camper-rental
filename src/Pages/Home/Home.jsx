import React, { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import {trendMoviesFetch} from '../../api/getItem'
  
const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);

  useEffect(() => {
    trendMoviesFetch()
      .then(response => {
        setTrendFilms(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  
  return (
    <>
      <MovieList movies={trendFilms} />
    </>
  )
};

export default Home;