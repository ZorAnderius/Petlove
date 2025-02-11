import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './news/slice.js';
import { authReducer } from './auth/slice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
});
