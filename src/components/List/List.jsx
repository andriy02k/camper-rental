import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { campersSelector } from '../../store/selectors';
import { getAllCampersThunk } from '../../store/Thunks';
import { Svg } from '../../components/Icons/Icons';
import '../../index.css';
import css from './List.module.css';

const List = () => {
  const dispatch = useDispatch();
  const campers = useSelector(campersSelector);
  console.log(campers);

  useEffect(() => {
    dispatch(getAllCampersThunk());
  }, [dispatch]);

  return (
    <div className="container">
      <ul className={css.list}>
        {campers.map(
          ({
            _id,
            name,
            price,
            rating,
            location,
            adults,
            children,
            engine,
            transmission,
            form,
            length,
            width,
            height,
            tank,
            consumption,
            description,
            details,
            gallery,
            reviews,
          }) => (
            <li className={css.card} key={_id}>
              <img className={css.img} src={gallery[0]} alt="camper" />
              <div>
                <div className={css.title_container}>
                  <h2 style={{ fontSize: '24px' }}>{name}</h2>
                  <div className={css.price}>
                    <p>&#x20AC;{price.toFixed(2)}</p>
                    <Svg id={'#icon-default'} width={24} height={24} />
                  </div>
                </div>
                <div className={css.loc_container}>
                  <p className={css.gap}>
                    <Svg id={'#icon-star'} width={24} height={24} />
                    {`${rating}(${reviews.length} Reviews)`}
                  </p>
                  <p className={css.gap}>
                    <Svg id={'#icon-map'} width={24} height={24} />
                    {location}
                  </p>
                </div>
                <p className={css.desc}>{description}</p>
                <div className={css.benefits}>
                  <div className={css.item}>
                    <Svg id={'#icon-Users'} width={24} height={24} />
                    {`${adults} adults`}
                  </div>
                  <div className={css.item}>
                    <Svg id={'#icon-trans'} width={24} height={24} />
                    {transmission.charAt(0).toUpperCase() +
                      transmission.slice(1)}
                  </div>
                  <div className={css.item}>
                    <Svg id={'#icon-fuel'} width={24} height={24} />
                    {engine.charAt(0).toUpperCase() + engine.slice(1)}
                  </div>
                  <div className={css.item}>
                    <Svg id={'#icon-kitchen'} width={24} height={24} />
                    {`${details.kitchen} Kitchen`}
                  </div>
                  <div className={css.item}>
                    <Svg id={'#icon-bad'} width={24} height={24} />
                    {`${details.beds} Beds`}
                  </div>
                  <div className={css.item}>
                    <Svg id={'#icon-Vector'} width={20} height={24} />
                    AC
                  </div>
                </div>
                <button className={css.button}>Show more</button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default List;
