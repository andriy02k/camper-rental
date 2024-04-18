import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Home.module.css';
import img from '../../image/0012JessSantos_BestT.jpg';
import '../../index.css';

const Home = () => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate('/catalog');
  };

  return (
    <section className="section">
      <div className="container">
        <div className={css.flex}>
          <img src={img} className={css.img} alt="camper" />
          <h1 className={css.title}>
            Welcome to our company providing{' '}
            <span className={css.titlePart}>camper rental</span> services!
          </h1>
        </div>
        <p className={css.text}>
          We are your reliable partner in travels across Ukraine! Whether you're
          seeking adventures in the wild nature, a peaceful relaxation by the
          sea shore, or an exciting camping under the stars, we have the perfect
          solution for you.
        </p>
        <ul className={css.list}>
          Our services include:
          <li className={css.item}>
            <span className={css.subtitle}>Wide selection of campers: </span>
            Choose the perfect camper for your needs and budget.
          </li>
          <li className={css.item}>
            <span className={css.subtitle}>Convenience and comfort: </span>
            Our campers are equipped with everything necessary for a pleasant
            and carefree vacation.
          </li>
          <li className={css.item}>
            <span className={css.subtitle}>Professional service: </span>
            Our team is ready to provide you with quality service and support
            throughout your journey.
          </li>
        </ul>
      </div>
      <button className={css.button} type="button" onClick={handlerNavigate}>
        Choose your camper
      </button>
    </section>
  );
};

export default Home;
