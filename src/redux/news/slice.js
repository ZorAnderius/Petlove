import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.js';
import { getNews } from './operation.js';

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getFilterValue: (state, { payload }) => {
      state.filterValue = payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(getNews.fulfilled, (state, { payload }) => {
      state.news = payload?.results;
      state.totalPages = payload?.totalPages;
    }),
});

export const { getFilterValue } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
