import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'
import img from '../../components/img/notFound.jpg'

const MovieList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <ul className={css.list}>
          {movies && movies.map(({ id, name, title, poster_path }) => {
              return (
                  <li key={id} className={css.item}>
                      <Link to={`/movies/${id}`} className="" state={{ location }}>
                          <img
                              src={
                                poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`: img
                              }
                              alt={title}
                              width="300"
                              height="400"
                          />
                          <h3 className="w-full text-black hover:text-gray-400">{name || title}</h3>
                      </Link>
                  </li>
              )
          })}
    </ul>
  )
}

export default MovieList