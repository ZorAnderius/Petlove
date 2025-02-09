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

    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },

  extraReducers: builder =>
    builder.addCase(getNews.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.news = payload?.results;
      state.totalPages = payload?.totalPages;
      state.isEmpty = payload?.results?.length > 0;
    }),
});

export const { getFilterValue, setPage } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
