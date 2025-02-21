import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.js';
import { getNoticeById, getNotices } from './operation.js';

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getNotices.fulfilled, (state, { payload }) => {
        state.notices = payload.results;
        state.totalPages = payload.totalPages;
      })
      .addCase(getNoticeById.fulfilled, (state, action) => {
        state.notice = action.payload;
      })
      .addCase(getNoticeById.pending, state => {
        state.notice = null;
      }),
});

export const { setPage } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
