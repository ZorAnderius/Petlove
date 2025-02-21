import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.js';

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.contentData = action.payload.contentData;
      state.type = action.payload.type;
    },
    closeModal: state => {
      state.isModalOpen = false;
      state.contentData = null;
      state.type = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
