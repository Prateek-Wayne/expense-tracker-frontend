import { configureStore } from "@reduxjs/toolkit";
import { loginAPI } from "./services/loginAPI";
import { registerAPI } from "./services/registerAPI";
import { incomeAPI } from "./services/incomeAPI";

const store = configureStore({
  reducer: {
    [loginAPI.reducerPath]: loginAPI.reducer,
    [registerAPI.reducerPath]: registerAPI.reducer,
    [incomeAPI.reducerPath]: incomeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loginAPI.middleware)
      .concat(registerAPI.middleware)
      .concat(incomeAPI.middleware),
});
export default store;
