import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.js';
import { getNotices } from './operation.js';

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(getNotices.fulfilled, (state, { payload }) => {
      state.notices = payload.results;
      state.totalPages = payload.totalPages;
    }),
});

export const { setPage } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
