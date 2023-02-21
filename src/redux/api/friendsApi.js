import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, SERVICES_URL } from 'constants/api';

export const friendsApi = createApi({
  reducerPath: 'friendsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getFriends: builder.query({
      query: () => `${SERVICES_URL}`,
      transformResponse: response => response.data,
    }),
  }),
});

export const { useGetFriendsQuery } = friendsApi;
