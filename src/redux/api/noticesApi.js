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
    }),
    getFavoritesNotices: builder.query({
      query: () => `${NOTICES_URL}/favorites`,
    }),
    getUserNotices: builder.query({
      query: () => `${NOTICES_URL}/user`,
    }),
    getNoticeById: builder.query({
      query: noticeId => `${NOTICES_URL}${ID_URL}/${noticeId}`,
    }),
    addNotice: builder.mutation({
      query: ({ categoryName, noticeData }) => ({
        url: `${NOTICES_URL}${CATEGORY_URL}/${categoryName}`,
        method: 'POST',
        body: noticeData,
      }),
    }),
    deleteNotice: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${ID_URL}/${noticeId}`,
        method: 'DELETE',
      }),
    }),
    addNoticeToFavorite: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${FAVORITES_URL}/${noticeId}`,
        method: 'POST',
      }),
    }),
    removeNoticeFromFavorite: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${FAVORITES_URL}/${noticeId}`,
        method: 'DELETE',
      }),
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
