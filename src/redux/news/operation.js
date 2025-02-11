import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/configAPI.js';

export const getNews = createAsyncThunk(
  'news/getNews',
  async ({ page = 1, filterValue = '' }, thunkAPI) => {
    try {
      const response = await api.get('/news', {
        params: {
          limit: 6,
          page,
          keyword: filterValue,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
