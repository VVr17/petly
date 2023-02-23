import { createApi } from '@reduxjs/toolkit/query/react';
import {
  CATEGORY_URL,
  FAVORITES_URL,
  ID_URL,
  NOTICES_URL,
  TAGS_TYPES,
} from 'constants/api';
import baseQuery from 'redux/baseQuery';

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
      query: ({ categoryName, noticeData }) => {
        console.log('noticeData', noticeData);

        return {
          url: `${NOTICES_URL}${CATEGORY_URL}/${categoryName}`,
          method: 'POST',
          // headers: {
          //   'Content-Type': 'multipart/form-data',
          // },
          body: noticeData,
        };
      },
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
    }),
    removeNoticeFromFavorite: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${FAVORITES_URL}/${noticeId}`,
        method: 'DELETE',
      }),
      transformResponse: response => response.data,
      invalidatesTags: [TAGS_TYPES.notice],
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
