import { configureStore } from "@reduxjs/toolkit";
import { loginAPI } from "./services/loginAPI";
import { registerAPI } from "./services/registerAPI";
import { incomeAPI } from "./services/incomeAPI";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    [loginAPI.reducerPath]: loginAPI.reducer,
    [registerAPI.reducerPath]: registerAPI.reducer,
    [incomeAPI.reducerPath]: incomeAPI.reducer,
    authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loginAPI.middleware)
      .concat(registerAPI.middleware)
      .concat(incomeAPI.middleware),
});
export default store;
