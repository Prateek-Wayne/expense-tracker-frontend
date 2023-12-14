import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie';

export const incomeAPI = createApi({
  reducerPath: "loginReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expense-tracker-api-k3sr.onrender.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token=Cookies.get('token');
      console.log("🚀 ~ file: incomeAPI.js:10 ~ token:", token)

      // console.log("🚀 ~ file: incomeAPI.js:10 ~ tookieLib:", tookieLib)
    
      // const token = getState().authSlice?.token; // Corrected line
      // console.log(' Inside the incomeAPI states: ', token);
      // const mytoken="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiNjU3MDc1ODQ0Y2M4MWZhMmE5NDYyYWFhIiwiaWF0IjoxNzAyNTU4NTkzfQ.HXeXhhFoX_ExtgaqSPQs1JFEkBcbc1DcgH6TFhYWYJA";
      headers.set('authorization',`Bearer ${token}`);
      return headers;
    },
    
  }),
  tagTypes: ["INCOME"],
  endpoints: (builder) => ({
    createIncome: builder.mutation({
      query: (data) => ({
        url: "/createIncome",
        method: "POST",
        body: data,
        mode: "cors",
        headers: {
					'Content-type': 'application/json',
				},
      }),
      invalidatesTags: ["INCOME"],
    }),
  }),
});
export const { useCreateIncomeMutation } = incomeAPI;
