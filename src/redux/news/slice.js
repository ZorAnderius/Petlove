import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './intiialState.js';
import { getNews } from './operation.js';

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder =>
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload;
    }),
});

export const newsReducer = newsSlice.reducer;
