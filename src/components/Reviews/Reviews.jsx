import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {getMovieReview} from '../../api/getItem'

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
      getMovieReview(moviesId)
          .then(response => {
          setreviews(response.results);
        })
        .catch(({ message }) => {
          console.log(message);
        });
  }, [moviesId])
  return (
    <ul>
          {reviews.map(({ id, author, content }) => {
              return(
                <li key={id}>
                    <p className='text-24px'>Author: {author}</p>
                    <p>Content: {content}</p>
                </li>
              )
          })} 
    </ul>
  )
}

export default Reviews