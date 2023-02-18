import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TAGS_TYPES, USER_URL } from 'constants/api';
import baseQuery from 'redux/baseQuery';
import { setUser } from './userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.user],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => '/api/auth/current',
      method: 'GET',
      invalidatesTags: ['User'],
    }),

    signupUser: builder.mutation({
      query: credentials => ({
        url: `${USER_URL}/signup`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { data },
          } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
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
