import { configureStore } from "@reduxjs/toolkit";
import { loginAPI } from "./services/loginAPI";

 const store=configureStore({
    reducer:{
        [loginAPI.reducerPath]:loginAPI.reducer
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginAPI.middleware),

})
export default store;