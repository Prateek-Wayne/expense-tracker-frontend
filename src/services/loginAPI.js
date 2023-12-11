import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const loginAPI = createApi({
    reducerPath: "loginReducer",
    baseQuery: fetchBaseQuery({ baseUrl: "https://expense-tracker-api-k3sr.onrender.com/api/v1" }),
    tagTypes: ['LOGIN'],
    endpoints: (builder) => ({
        login:builder.mutation({
            query:(data)=>({
                url:'/login',
                method:"POST",
                body:data,
                mode: "cors"
            }),
            invalidatesTags:["LOGIN"]
        })
    })
});
export const {useLoginMutation}=loginAPI;

