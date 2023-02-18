import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TAGS_TYPES } from 'constants/api';
import baseQuery from 'redux/baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pet-support.up.railway.app',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [TAGS_TYPES.user],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => '/api/auth/current',
      method: 'GET',
      invalidatesTags: ['User'],
    }),

    signupUser: builder.mutation({
      query: credentials => ({
        url: 'api/auth/signup',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    loginUser: builder.mutation({
      query: credentials => ({
        url: '/api/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    logoutUser: builder.mutation({
      query: credentials => ({
        url: '/api/auth/logout',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = userApi;
