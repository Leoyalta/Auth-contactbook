import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thankAPI) => {
    try {
      const response = await axios.post("/users/signup", userData);

      setAuthHeader(response.data.token);

      return response.data;
    } catch (err) {
      if (!axios.isAxiosError(err) || !err.response) {
        throw err;
      }
      return thankAPI.rejectWithValue(err.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thankAPI) => {
    try {
      const response = await axios.post("/users/login", userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      if (!axios.isAxiosError(err) || !err.response) {
        throw err;
      }
      return thankAPI.rejectWithValue(err.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      axios.defaults.headers.common.Authorization = "";
    } catch (err) {
      if (!axios.isAxiosError(err) || !err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "user/refresh",
  async (_, thankAPI) => {
    try {
      const reduxState = thankAPI.getState();
      setAuthHeader(reduxState.auth.token);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (err) {
      if (!axios.isAxiosError(err) || !err.response) {
        throw err;
      }
      return thankAPI.rejectWithValue(err.response.data);
    }
  },
  {
    condition: (_, thankAPI) => {
      const reduxState = thankAPI.getState();
      return reduxState.auth.token != null;
    },
  }
);
