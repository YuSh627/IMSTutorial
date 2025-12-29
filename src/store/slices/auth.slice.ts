import { clearStorage, setValues } from "@/src/utils/asyncStorage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      setValues("token", action.payload);
    },

    setUser: (state, action) => {
      state.userName = action.payload;
      setValues("userName", action.payload);
    },

    logout: () => {
      clearStorage();
    },
  },
});

export const { setToken, setUser, logout } = authSlice.actions;

export default authSlice.reducer;
