import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './news/slice.js';
import { authReducer } from './auth/slice.js';
import { noticesReducer } from './notices/slice.js';
import { modalReducer } from './modal/slice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    notices: noticesReducer,
    modal: modalReducer,
  },
});
