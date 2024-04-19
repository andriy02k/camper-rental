import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCampers } from '../../api/api';

export const getAllCampersThunk = createAsyncThunk(
  'campers/getCampers',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllCampers();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
