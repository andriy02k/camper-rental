import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './Slice';

const reducer = {
  campers: campersReducer,
};

export const store = configureStore({ reducer });
