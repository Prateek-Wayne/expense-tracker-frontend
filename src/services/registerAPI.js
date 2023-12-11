import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const registerAPI = createApi({
    reducerPath: "registerReducer",
    baseQuery: fetchBaseQuery({ baseUrl: "https://expense-tracker-api-k3sr.onrender.com/api/v1" }),
    tagTypes: ['REGISTER'],
    endpoints: (builder) => ({
        login:builder.mutation({
            query:(data)=>({
                url:'/register',
                method:"POST",
                body:data,
                mode: "cors"
            }),
            invalidatesTags:["REGISTER"]
        })
    })
});
export const {useRegisterMutation}=registerAPI;

