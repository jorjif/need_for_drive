import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const databaseApi = createApi({
  reducerPath: "carList",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-factory.simbirsoft1.com/api/",
  }),
  endpoints: (builders) => ({
    getCars: builders.query({
      query: () => {
        return {
          url: "db/car",
          method: "GET",
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
            Authorization: "Bearer 4cbcea96de",
          },
        };
      },
    }),
  }),
});

export const { useGetCarsQuery } = databaseApi;
