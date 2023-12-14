import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{
        userName:null,
        token:null,
    },
    reducers:{
        setToken:(state,action)=>{
            console.log("Inside the auth Slice",action.payload);
            state.userName=action.payload.user;
            state.token=action.payload.token;
        }
    }
});
export const {setToken}=authSlice.actions;
export default authSlice.reducer;