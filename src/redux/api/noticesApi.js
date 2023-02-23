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
  tagTypes: [TAGS_TYPES.notice],
  endpoints: builder => ({
    getNoticeByCategory: builder.query({
      query: categoryName => `${NOTICES_URL}/${categoryName}`,
      transformResponse: response => response.data,
      providesTags: [TAGS_TYPES.notice],
    }),
    getFavoritesNotices: builder.query({
      query: () => `${NOTICES_URL}/favorites`,
      transformResponse: response => response.data,
      providesTags: [TAGS_TYPES.notice],
    }),
    getUserNotices: builder.query({
      query: () => `${NOTICES_URL}/user`,
      transformResponse: response => response.data,
      providesTags: [TAGS_TYPES.notice],
    }),
    getNoticeById: builder.query({
      query: noticeId => `${NOTICES_URL}${ID_URL}/${noticeId}`,
      transformResponse: response => response.data,
      providesTags: [TAGS_TYPES.notice],
    }),
    addNotice: builder.mutation({
      query: ({ categoryName, noticeData }) => ({
        // url: `${NOTICES_URL}${CATEGORY_URL}/${categoryName}`,

        url: `http://localhost:3000/api/notices${CATEGORY_URL}/${categoryName}`,
        method: 'POST',
        body: noticeData,
      }),
      transformResponse: response => response.data,
      invalidatesTags: [TAGS_TYPES.notice],
    }),
    deleteNotice: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${ID_URL}/${noticeId}`,
        method: 'DELETE',
      }),
      transformResponse: response => response.data,
      invalidatesTags: [TAGS_TYPES.notice],
    }),
    addNoticeToFavorite: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${FAVORITES_URL}/${noticeId}`,
        method: 'POST',
      }),
      transformResponse: response => response.data,
      invalidatesTags: [TAGS_TYPES.notice],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(addFavorites(id));
        } catch (err) {
          console.log('error... ', err);
        }
      },
    }),
    removeNoticeFromFavorite: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${FAVORITES_URL}/${noticeId}`,
        method: 'DELETE',
      }),
      transformResponse: response => response.data,
      invalidatesTags: [TAGS_TYPES.notice],
      async onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
        try {
          await queryFulfilled;
          dispatch(removeFavorites(id));
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
