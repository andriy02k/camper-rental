import React from 'react';
import Form from '../Form/Form';
import { Svg } from '../../components/Icons/Icons';
import css from './Reviews.module.css';

const Reviews = ({ camper }) => {
  return (
    <div className={css.flex}>
      <ul>
        {camper.reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
          <li>
            <div>{reviewer_name.charAt(0).toUpperCase()}</div>
            <div>
              <p>{reviewer_name}</p>
              <p>{reviewer_rating}</p>
            </div>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Reviews;
