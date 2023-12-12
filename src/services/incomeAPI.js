import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const incomeAPI = createApi({
  reducerPath: "loginReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expense-tracker-api-k3sr.onrender.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["INCOME"],
  endpoints: (builder) => ({
    createIncome: builder.mutation({
      query: (data, token) => ({
        url: "/createIncome",
        method: "POST",
        body: data,
        mode: "cors",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["INCOME"],
    }),
  }),
});
export const { useCreateIncomeMutation } = incomeAPI;
