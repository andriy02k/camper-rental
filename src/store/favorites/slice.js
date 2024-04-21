import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToLocalStorage: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromLocalStorage: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item._id !== action.payload._id
      );
    },
  },
});

export const { addToLocalStorage, removeFromLocalStorage } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
