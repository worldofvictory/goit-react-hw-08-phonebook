import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {URL} from "../../services/apiService";
import { toast } from "react-toastify";

axios.defaults.baseURL = URL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
  try {
    const res = await axios.post('/auth/register', userData);
    setAuthHeader(res.data.token);
     toast.success(
        "Congratulations, your account has been successfully created!",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        }
      );
    return res.data;
  } catch (error) {
    toast.warning(
        "Email already in use.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        }
      );
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
  try {
    const res = await axios.post('/auth/login', userData);
    setAuthHeader(res.data.token);
    toast.success("Welcome to TaskPro!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    return res.data;
  } catch (error) {
    toast.error("Incorrect email or password. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    const res = await axios.get('/users/current');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

