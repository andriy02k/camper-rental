import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/Slice';
import { favoritesReducer } from './favorites/slice';
import modalReducer from './modal/slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

const reducer = {
  campers: campersReducer,
  modal: modalReducer,
  favorites: persistedReducer,
};

export const store = configureStore({ reducer });
export const persistor = persistStore(store);
