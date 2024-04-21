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
  },
});

export const { addToLocalStorage } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
