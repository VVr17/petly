import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'constants/api';

export const friendsApi = createApi({
  reducerPath: 'friendsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Friends'],
  endpoints: builder => ({
    getFriends: builder.query({
      query: () => `/api/services`,
      providesTags: ['Friends'],
    }),
  }),
});

export const { useGetFriendsQuery } = friendsApi;
