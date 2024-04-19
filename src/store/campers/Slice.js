import { createSlice } from '@reduxjs/toolkit';
import { getAllCampersThunk } from './Thunks';

const handlePaending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCampersThunk.pending, handlePaending)
      .addCase(getAllCampersThunk.rejected, handleReject)
      .addCase(getAllCampersThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
