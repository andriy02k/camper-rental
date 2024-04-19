import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/Slice';
import modalReducer from './modal/slice';

const reducer = {
  campers: campersReducer,
  modal: modalReducer,
};

export const store = configureStore({ reducer });
