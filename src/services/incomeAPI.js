import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const incomeAPI = createApi({
  reducerPath: "incomeReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expense-tracker-api-k3sr.onrender.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = Cookies.get("token");
      // console.log("🚀 ~ file: incomeAPI.js:10 ~ token:", token);
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["INCOME"],
  endpoints: (builder) => ({
    getIncomes: builder.query({
      query: () => "/getIncome",
      providesTags:["INCOME"],
    }),
    createIncome: builder.mutation({
      query: (data) => ({
        url: "/createIncome",
        method: "POST",
        body: data,
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags: ["INCOME"],
    }),
  }),
});
export const { useCreateIncomeMutation ,useGetIncomesQuery } = incomeAPI;
