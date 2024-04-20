import React from 'react';
import css from './Form.module.css';

const Form = () => {
  return (
    <div className={css.form_container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.desc}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form}>
        <input className={css.input} type="text" placeholder="Name" />
        <input className={css.input} type="email" placeholder="Email" />
        <input className={css.input} type="date" placeholder="Booking date" />
        <textarea
          className={css.input}
          name="comment"
          cols="30"
          rows="5"
          placeholder="Comment"
        ></textarea>
        <button className={css.button}>Send</button>
      </form>
    </div>
  );
};

export default Form;
