import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/configAPI.js';

export const getNews = createAsyncThunk('news/getNews', async (_, thunkAPI) => {
  try {
    const response = await api.get('/news', {
      params: {
        limit: 6,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
