import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getCharas: builder.query({
      query: () => "https://api.genshin.dev/characters",
    }),
    getSingleChara: builder.query({
      query: (name) =>
        `https://genshin-db-api.vercel.app/api/characters?query=${name}`,
    }),
  }),
});

// Export the auto-generated hook for query endpoint
export const { useGetCharasQuery, useGetSingleCharaQuery } = apiSlice;
