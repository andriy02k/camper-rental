import React, { useState } from 'react';
import css from './Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (name.trim() === '' || email.trim() === '' || date.trim() === '') {
      alert('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log({ name, email, date, comment });

    setName('');
    setEmail('');
    setDate('');
    setComment('');
  };
  return (
    <div className={css.form_container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.desc}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className={css.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className={`${css.input} ${css.calendar}`}
          type="date"
          placeholder="Booking date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <textarea
          className={css.input}
          name="comment"
          cols="30"
          rows="5"
          placeholder="Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        ></textarea>
        <button type="submit" className={css.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
