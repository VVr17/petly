import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, NEWS_URL } from 'constants/api';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getNews: builder.query({
      query: () => `${NEWS_URL}`,
      transformResponse: response => response.data,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
