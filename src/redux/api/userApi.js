import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TAGS_TYPES } from 'constants/api';
import baseQuery from 'redux/baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pet-support.up.railway.app/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      console.log('token:', token);
      if (token) {
        console.log(token);
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

/**
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TAGS_TYPES, USER_URL } from 'constants/api';
import { setUser } from 'redux/auth/authSlice';
import baseQuery from 'redux/baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.user],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: `${USER_URL}/current`,
      }),

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
      invalidatesTags: ['User'],
    }),

    signupUser: builder.mutation({
      query: credentials => {
        console.log('url', `${USER_URL}/signup`);
        return {
          url: `${USER_URL}/signup`,
          method: 'POST',
          body: credentials,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          console.log('data user', data);
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
      invalidatesTags: ['User'],
    }),

    loginUser: builder.mutation({
      query: credentials => ({
        url: `${USER_URL}/login`,
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
      invalidatesTags: ['User'],
    }),

    logoutUser: builder.query({
      query: () => ({
        url: `${USER_URL}/logout`,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserQuery,
} = userApi;

   */
