import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState.js';
import { loginUser, logOut, registerUser } from './operation.js';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: state => {
      state.token = '';
      state.isLoggedIn = false;
      state.currentUser = {};
    },
  },
  extraReducers: builder =>
    builder
      .addCase(logOut.fulfilled, state => {
        state.token = '';
        state.isLoggedIn = false;
        state.currentUser = {};
      })
      .addMatcher(
        isAnyOf(registerUser.fulfilled, loginUser.fulfilled),
        (state, action) => {
          state.token = action.payload;
          state.isLoggedIn = true;
        },
      ),
});

export const { resetAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
