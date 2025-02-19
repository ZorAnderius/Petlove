import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/configAPI.js';
import { queryParamsNotices } from '../../helpers/formatter/queryParamsNotices.js';

export const getNotices = createAsyncThunk(
  'notices/getNotices',
  async ({ ...filterData }, { rejectWithValue }) => {
    try {
      const params = queryParamsNotices(filterData);
      const { data } = await api.get('/notices', { params });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
