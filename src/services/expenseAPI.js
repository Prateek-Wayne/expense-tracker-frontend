import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const expenseAPI = createApi({
  reducerPath: "expenseReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expense-tracker-api-k3sr.onrender.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = Cookies.get("token");
      //   console.log("🚀 ~ file: incomeAPI.js:10 ~ token:", token);
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["EXPENSE"],
  endpoints: (builder) => ({
    getExpense: builder.query({
      query: () => "/getExpense",
      providesTags: ["EXPENSE"],
    }),
    deleteExpense: builder.mutation({
      query: (id) => ({
        url: `/deleteExpense/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EXPENSE"],
    }),
    createExpense: builder.mutation({
      query: (data) => ({
        url: "/createExpense",
        method: "POST",
        body: data,
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags: ["EXPENSE"],
    }),
  }),
});
export const { useCreateExpenseMutation,useGetExpenseQuery,useDeleteExpenseMutation } = expenseAPI;
