import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setToken } from '../../api/configAPI.js';
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

export const getNoticeById = createAsyncThunk(
  'notices/getById',
  async (id, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      if (!token) {
        throw new Error('User is not authorize');
      }
      setToken(token);
      const { data } = await api.get(`/notices/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
