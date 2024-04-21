import React from 'react';
import Form from '../Form/Form';
import { Svg } from '../../components/Icons/Icons';
import css from './Reviews.module.css';

const Reviews = ({ camper }) => {
  const renderStars = rating => {
    const MAXRATING = 5;

    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Svg key={`star-${i}`} id={'#icon-star'} width={24} height={24} />
      );
    }
    for (let i = 0; i < MAXRATING - rating; i++) {
      stars.push(
        <Svg key={`starG-${i}`} id={'#icon-starGrey'} width={24} height={24} />
      );
    }
    return stars;
  };
  return (
    <div className={css.flex}>
      <ul className={css.list}>
        {camper.reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
          <li key={reviewer_rating} className={css.card}>
            <div className={css.user}>
              <div className={css.avatar}>
                {reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p>{reviewer_name}</p>
                <div>{renderStars(reviewer_rating)}</div>
              </div>
            </div>
            <p className={css.desc}>{comment}</p>
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Reviews;
