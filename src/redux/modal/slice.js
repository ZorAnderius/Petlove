import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.js';

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.content = action.payload.content;
      state.contentStyle = action.payload.contentStyle;
    },
    closeModal: state => {
      state.isModalOpen = false;
      state.content = null;
      state.contentStyle = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
