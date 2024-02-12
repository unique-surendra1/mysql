import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auhtSlices/authSlice";
import { apiSlice } from "./auhtSlices/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaltMiddlleware) =>
    getDefaltMiddlleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
