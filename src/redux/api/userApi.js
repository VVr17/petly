import { createApi } from '@reduxjs/toolkit/query/react';
import { TAGS_TYPES, USER_URL } from 'constants/api';
import baseQuery from 'redux/baseQuery';
import { setFavorites } from 'redux/favorites/favoritesSlice';
import { setUser, setToken, logout, setIsAuth } from '../user/userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.user],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => `${USER_URL}/current`,
      transformResponse: response => response.data,
      providesTags: [TAGS_TYPES.user],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const updatedData = {
            ...data,
            phone: data.phone || '',
            city: data.city || '',
          };
          dispatch(setUser(updatedData));
          dispatch(setIsAuth(true));
          dispatch(setFavorites(data.favoriteNotices));
        } catch (error) {
          const {
            error: { status, data },
          } = error;
          if (status === 401 && data.message.includes('Token error')) {
            dispatch(setToken(null));
            dispatch(setIsAuth(false));
          }
        }
      },
    }),

    forgotPassword: builder.mutation({
      query: email => ({
        url: `${USER_URL}/forgot-password`,
        method: 'POST',
        body: { email },
      }),
    }),
    
    newPassword: builder.mutation({
      query: ({ token, newPassword }) => ({
        url: `${USER_URL}/reset-password/${token}`,
        method: 'PUT',
        body: { password: newPassword },
      }),
    }),

    signupUser: builder.mutation({
      query: credentials => ({
        url: `${USER_URL}/signup`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: [TAGS_TYPES.user],
    }),

    resendEmail: builder.mutation({
      query: email => ({
        url: `${USER_URL}/verify`,
        method: 'POST',
        body: { email },
      }),
      invalidatesTags: [TAGS_TYPES.user],
    }),

    loginUser: builder.mutation({
      query: credentials => ({
        url: `${USER_URL}/login`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: [TAGS_TYPES.user],
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

    loginGoogleAuthUser: builder.mutation({
      query: credentials => ({
        url: `${USER_URL}/google/login`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: [TAGS_TYPES.user],
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
      invalidatesTags: [TAGS_TYPES.user],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          dispatch(logout());
        } catch (error) {}
      },
    }),

    updateUser: builder.mutation({
      query: userData => {
        return {
          url: `${USER_URL}/current`,
          method: 'PUT',
          body: userData,
        };
      },
      invalidatesTags: [TAGS_TYPES.user],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { data },
          } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setFavorites(data.favoriteNotices));
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
  useUpdateUserMutation,
  useLoginGoogleAuthUserMutation,
  useResendEmailMutation,
  useForgotPasswordMutation,
  useNewPasswordMutation,
} = userApi;
