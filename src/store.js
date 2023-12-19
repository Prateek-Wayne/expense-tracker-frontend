import { configureStore } from "@reduxjs/toolkit";
import { loginAPI } from "./services/loginAPI";
import { registerAPI } from "./services/registerAPI";
import { incomeAPI } from "./services/incomeAPI";
import { expenseAPI } from "./services/expenseAPI";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    [loginAPI.reducerPath]: loginAPI.reducer,
    [registerAPI.reducerPath]: registerAPI.reducer,
    [incomeAPI.reducerPath]: incomeAPI.reducer,
    [expenseAPI.reducerPath]:expenseAPI.reducer,
    authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loginAPI.middleware)
      .concat(registerAPI.middleware)
      .concat(incomeAPI.middleware)
      .concat(expenseAPI.middleware),
});
export default store;
