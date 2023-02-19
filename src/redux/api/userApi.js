import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TAGS_TYPES, USER_URL } from 'constants/api';
import baseQuery from 'redux/baseQuery';
import { setUser, setToken, logout } from './userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.user],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => '/api/auth/current',
      method: 'GET',
      invalidatesTags: ['User'],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { data },
          } = await queryFulfilled;
          dispatch(setUser(data.user));
        } catch (error) {}
      },
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
          console.log("userAPI signup:", data)
          dispatch(setUser(data.user));
          dispatch(setToken(data.token));
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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { data },
          } = await queryFulfilled;
          dispatch(setUser(data.user));
          dispatch(setToken(data.token));
        } catch (error) {}
      },
    }),

    logoutUser: builder.mutation({
      query: credentials => ({
        url: '/api/auth/logout',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          dispatch(logout());
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = userApi;
