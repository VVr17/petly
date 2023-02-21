import { createApi } from '@reduxjs/toolkit/query/react';
import { TAGS_TYPES, USER_URL } from 'constants/api';
import baseQuery from 'redux/baseQuery';
import { setUser, setToken, logout, setIsAuth } from '../user/userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.user],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => `${USER_URL}/current`,
      transformResponse: response => response.data,
      providesTags: ['User'],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setIsAuth(true));
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
          dispatch(setUser(data.user));
          dispatch(setToken(data.token));
        } catch (error) {}
      },
    }),

    loginUser: builder.mutation({
      query: credentials => ({
        url: `${USER_URL}/login`,
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
        url: `${USER_URL}/logout`,
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

    updateUser: builder.mutation({
      query: userData => ({
        url: `${USER_URL}/current`,
        method: 'PUT',
        body: userData,
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
  }),
});

export const {
  useGetCurrentUserQuery,
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation
} = userApi;
