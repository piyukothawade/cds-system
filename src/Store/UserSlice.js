// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    loginUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.isLoggedIn = true; // Set isLoggedIn to true upon successful login
    },
    loginUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false; // Set isLoggedIn to false upon logout
    },
  },
});

export const { loginUserStart, loginUserSuccess, loginUserFailure, logoutUser } = userSlice.actions;
export default userSlice.reducer;
