import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearToken, setToken } from '../../api/configAPI.js';
import { resetAuthState } from './slice.js';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/users/signup', body);
      setToken(data.token);
      return data.token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/users/signin', body);
      setToken(data.token);
      return data.token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const currentUserSimpleInfo = createAsyncThunk(
  'auth/currentUserSimple',
  async (_, { rejectWithValue, getState }) => {
    try {
      const accessToken = getState().auth.token;
      if (!accessToken) return rejectWithValue('Access token is missing!');
      const { data } = await api.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const currentUserFullInfo = createAsyncThunk(
  'auth/currentUserFull',
  async (_, { rejectWithValue, getState }) => {
    try {
      const accessToken = getState.auth.token;
      if (!accessToken) return rejectWithValue('Access token is missing!');
      const { data } = await api.get('/users/current/full');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      clearToken();
      const response = await api.post('/users/signout');
      if (response.status === 204 || response.status === 200) {
        dispatch(resetAuthState);
      } else {
        throw new Error('Loggout failed');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
