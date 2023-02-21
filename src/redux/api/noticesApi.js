import { createApi } from '@reduxjs/toolkit/query/react';
import {
  CATEGORY_URL,
  FAVORITES_URL,
  ID_URL,
  NOTICES_URL,
} from 'constants/api';
import baseQuery from 'redux/baseQuery';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery,
  endpoints: builder => ({
    getNoticeByCategory: builder.query({
      query: categoryName => `${NOTICES_URL}${CATEGORY_URL}/${categoryName}`,
      transformResponse: response => response.data,
    }),
    getFavoritesNotices: builder.query({
      query: () => `${NOTICES_URL}/favorites`,
      transformResponse: response => response.data,
    }),
    getUserNotices: builder.query({
      query: () => `${NOTICES_URL}/user`,
      transformResponse: response => response.data,
    }),
    getNoticeById: builder.query({
      query: noticeId => `${NOTICES_URL}${ID_URL}/${noticeId}`,
      transformResponse: response => response.data,
    }),
    addNotice: builder.mutation({
      query: ({ categoryName, noticeData }) => ({
        url: `${NOTICES_URL}${CATEGORY_URL}/${categoryName}`,
        method: 'POST',
        body: noticeData,
      }),
      transformResponse: response => response.data,
    }),
    deleteNotice: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${ID_URL}/${noticeId}`,
        method: 'DELETE',
      }),
      transformResponse: response => response.data,
    }),
    addNoticeToFavorite: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${FAVORITES_URL}/${noticeId}`,
        method: 'POST',
      }),
      transformResponse: response => response.data,
    }),
    removeNoticeFromFavorite: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${FAVORITES_URL}/${noticeId}`,
        method: 'DELETE',
      }),
      transformResponse: response => response.data,
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
