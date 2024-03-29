import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

let authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, actions) => {
      state.userInfo = actions.payload;
      localStorage.setItem("userInfo", JSON.stringify(actions.payload));
    },
    logout: (state, actions) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice = authSlice.reducer;
