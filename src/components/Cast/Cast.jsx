import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api/getItem'
import css from './Cast.module.css'

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
      getMovieCredits(moviesId)
          .then(response => {
          setCast(response.cast);
        })
        .catch(({ message }) => {
          console.log(message);
        });
  }, [moviesId])
  return (
    <ul className={css.list}>
          {cast.map(({ id, name, character, profile_path }) => {
              return(
                <li key={id} className={css.item}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                        alt={name}
                        width="120"
                        height="175"
                        className={css.img}
                    />
                    <p className='w-full text-black'>{name}</p>
                    <p className='w-full text-black'>Character:{character}</p>
                </li>
              )
          })} 
    </ul>
  )
}

export default Cast