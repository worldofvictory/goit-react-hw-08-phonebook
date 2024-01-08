import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const auteSlice = createSlice({
  name: 'aute',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggeIn: false,
        isRefreshing: false,
    },
  extraReducers: (builder) => {
      builder
          .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggeIn = true;
      })
          .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggeIn = true;
      })
        .addCase(logOut.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggeIn = false;
        })
        .addCase(refreshUser.pending, state => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.token = null;
            state.isLoggeIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, state => {
            state.isRefreshing = false;
        })
  },
});

export const auteReducer = auteSlice.reducer;