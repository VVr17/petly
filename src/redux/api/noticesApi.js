import { createApi } from '@reduxjs/toolkit/query/react';
import {
  CATEGORY_URL,
  FAVORITES_URL,
  ID_URL,
  NOTICES_URL,
  TAGS_TYPES,
} from 'constants/api';
import baseQuery from 'redux/baseQuery';
import { addFavorites, removeFavorites } from 'redux/favorites/favoritesSlice';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.notice, TAGS_TYPES.favorites],
  endpoints: builder => ({
    // Gets notices by category name, with optional search parameters and pagination.
    getNoticeByCategory: builder.query({
      query: ({ categoryName, search, page = 1 }) =>
        search
          ? `${NOTICES_URL}${CATEGORY_URL}/${categoryName}?page=${page}&search=${search}`
          : `${NOTICES_URL}${CATEGORY_URL}/${categoryName}?page=${page}`,
      providesTags: [TAGS_TYPES.notice],
    }),

    // Gets a user's favorite notices, with optional search parameters and pagination.
    getFavoritesNotices: builder.query({
      query: ({ search, page = 1 }) =>
        search
          ? `${NOTICES_URL}/favorites?page=${page}&search=${search}`
          : `${NOTICES_URL}/favorites?&page=${page}`,
      providesTags: [TAGS_TYPES.favorites],
    }),

    // Gets a user's notices, with optional search parameters and pagination.
    getUserNotices: builder.query({
      query: ({ search, page = 1 }) =>
        search
          ? `${NOTICES_URL}/user?page=${page}&search=${search}`
          : `${NOTICES_URL}/user?page=${page}`,
      providesTags: [TAGS_TYPES.notice],
    }),

    // Gets a notice by ID.
    getNoticeById: builder.query({
      query: noticeId => `${NOTICES_URL}${ID_URL}/${noticeId}`,
      transformResponse: response => response.data,
      providesTags: [TAGS_TYPES.notice],
    }),

    // Adds a new notice to a specified category.
    addNotice: builder.mutation({
      query: ({ categoryName, noticeData }) => ({
        url: `${NOTICES_URL}${CATEGORY_URL}/${categoryName}`,
        method: 'POST',
        body: noticeData,
      }),
      transformResponse: response => response.data,
      invalidatesTags: [TAGS_TYPES.notice],
    }),

    // Deletes a notice by ID.
    deleteNotice: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${ID_URL}/${noticeId}`,
        method: 'DELETE',
      }),
      transformResponse: response => response.data,
      invalidatesTags: [TAGS_TYPES.notice],
    }),

    // Adds a notice to a user's favorites by ID.
    addNoticeToFavorite: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${FAVORITES_URL}/${noticeId}`,
        method: 'POST',
      }),
      transformResponse: response => response.data,
      invalidatesTags: [TAGS_TYPES.favorites],
      // This function is triggered when the query is started: dispatches actions to update the Redux store "User's favorite notices" with the data returned by the query.
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const {
            meta: { response },
          } = await queryFulfilled;
          if (response.status === 200) dispatch(addFavorites(id));
        } catch (err) {
          console.log('error... ', err);
        }
      },
    }),

    // Removes a notice from a user's favorites by ID.
    removeNoticeFromFavorite: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${FAVORITES_URL}/${noticeId}`,
        method: 'DELETE',
      }),
      transformResponse: response => response.data,
      invalidatesTags: [TAGS_TYPES.favorites],
      // This function is triggered when the query is started: dispatches actions to update the Redux store "User's favorite notices" with the data returned by the query.
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          const {
            meta: { response },
          } = await queryFulfilled;
          if (response.status === 200) dispatch(removeFavorites(id));
        } catch (err) {
          console.log('error... ', err);
        }
      },
    }),
  }),
});

export const {
  useGetNoticeByCategoryQuery,
  useGetFavoritesNoticesQuery,
  useGetUserNoticesQuery,
  useGetNoticeByIdQuery,
  useAddNoticeMutation,
  useDeleteNoticeMutation,
  useAddNoticeToFavoriteMutation,
  useRemoveNoticeFromFavoriteMutation,
} = noticesApi;
