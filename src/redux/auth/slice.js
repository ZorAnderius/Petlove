import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState.js';
import { loginUser, registerUser } from './operation.js';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state, action) => {
      state.token = '';
      state.isLoggedIn = false;
      state.currentUser = {};
    },
  },
  extraReducers: builder =>
    builder.addMatcher(
      isAnyOf(registerUser.fulfilled, loginUser.fulfilled),
      (state, action) => {
        state.token = action.payload;
        state.isLoggedIn = true;
      },
    ),
});

export const { resetAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
