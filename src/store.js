import { configureStore } from "@reduxjs/toolkit";
import { loginAPI } from "./services/loginAPI";
import { registerAPI } from "./services/registerAPI";

 const store=configureStore({
    reducer:{
        [loginAPI.reducerPath]:loginAPI.reducer,
        [registerAPI.reducerPath]:registerAPI.reducer,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginAPI.middleware).concat(registerAPI.middleware)

})
export default store;