import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'redux/baseQuery';
import { TAGS_TYPES, USER_URL } from 'constants/api';
import { setFavorites } from 'redux/favorites/favoritesSlice';
import { setUser, setToken, logout, setIsAuth } from '../user/userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.user],
  endpoints: builder => ({
    // Fetches the current user data from the server, updates the Redux store with the user data and favorites, and sets the authentication status.
    getCurrentUser: builder.query({
      query: () => `${USER_URL}/current`,
      transformResponse: response => response.data,
      providesTags: [TAGS_TYPES.user],
      // This function is triggered when the query is started: dispatches actions to update the Redux store with the data returned by the query.
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

    // Sends a request to the server to reset the user's password using the provided email address.
    forgotPassword: builder.mutation({
      query: email => ({
        url: `${USER_URL}/forgot-password`,
        method: 'POST',
        body: { email },
      }),
    }),

    // Sends a request to the server to update the user's password with a new one using the provided token.
    newPassword: builder.mutation({
      query: ({ token, newPassword }) => ({
        url: `${USER_URL}/reset-password`,
        method: 'POST',
        body: { newPassword, token },
      }),
    }),

    // Sends a request to the server to create a new user account using the provided credentials, and invalidates the user cache.
    signupUser: builder.mutation({
      query: credentials => ({
        url: `${USER_URL}/signup`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: [TAGS_TYPES.user],
    }),

    // Sends a request to the server to resend the email verification link to the provided email address, and invalidates the user cache.
    resendEmail: builder.mutation({
      query: email => ({
        url: `${USER_URL}/verify`,
        method: 'POST',
        body: { email },
      }),
      invalidatesTags: [TAGS_TYPES.user],
    }),

    // Sends a request to the server to log in the user using the provided credentials, and updates the Redux store with the user data and token.
    loginUser: builder.mutation({
      query: credentials => ({
        url: `${USER_URL}/login`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: [TAGS_TYPES.user],
      // This function is triggered when the query is started: dispatches actions to update the Redux store with the data returned by the query.
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

    // Sends a request to the server to log in the user using Google authentication, and updates the Redux store with the user data and token.
    loginGoogleAuthUser: builder.mutation({
      query: credentials => ({
        url: `${USER_URL}/google/login`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: [TAGS_TYPES.user],
      // This function is triggered when the query is started: dispatches actions to update the Redux store with the data returned by the query.
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

    // Sends a request to the server to log out the user and clears the user data from the Redux store.
    logoutUser: builder.mutation({
      query: credentials => ({
        url: `${USER_URL}/logout`,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: [TAGS_TYPES.user],
      // This function is triggered when the query is started: dispatches actions to update the Redux store with the data returned by the query.
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          dispatch(logout());
        } catch (error) {}
      },
    }),

    // Sends a request to the server to update the user data using the provided information, and updates the Redux store with the new user data and favorites.
    updateUser: builder.mutation({
      query: userData => {
        return {
          url: `${USER_URL}/current`,
          method: 'PUT',
          body: userData,
        };
      },
      invalidatesTags: [TAGS_TYPES.user],
      // This function is triggered when the query is started: dispatches actions to update the Redux store with the data returned by the query.
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
