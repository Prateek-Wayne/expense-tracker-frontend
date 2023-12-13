import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const incomeAPI = createApi({
  reducerPath: "loginReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expense-tracker-api-k3sr.onrender.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice; // Corrected line
      console.log(' Inside the incomeAPI states: ', token);
      headers.set('authorization', token ? token : '');
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
