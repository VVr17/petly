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
    getNoticeByCategory: builder.query({
      query: ({ categoryName, search, page = 1 }) =>
        search
          ? `${NOTICES_URL}${CATEGORY_URL}/${categoryName}?page=${page}&search=${search}`
          : `${NOTICES_URL}${CATEGORY_URL}/${categoryName}?page=${page}`,
      providesTags: [TAGS_TYPES.notice],
    }),
    getFavoritesNotices: builder.query({
      query: ({ search, page = 1 }) =>
        search
          ? `${NOTICES_URL}/favorites?page=${page}&search=${search}`
          : `${NOTICES_URL}/favorites?&page=${page}`,
      providesTags: [TAGS_TYPES.favorites],
    }),
    getUserNotices: builder.query({
      query: ({ search, page = 1 }) =>
        search
          ? `${NOTICES_URL}/user?page=${page}&search=${search}`
          : `${NOTICES_URL}/user?page=${page}`,
      providesTags: [TAGS_TYPES.notice],
    }),
    getNoticeById: builder.query({
      query: noticeId => `${NOTICES_URL}${ID_URL}/${noticeId}`,
      transformResponse: response => response.data,
      providesTags: [TAGS_TYPES.notice],
    }),
    addNotice: builder.mutation({
      query: ({ categoryName, noticeData }) => ({
        url: `${NOTICES_URL}${CATEGORY_URL}/${categoryName}`,
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
      invalidatesTags: [TAGS_TYPES.favorites],
      async onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
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
    removeNoticeFromFavorite: builder.mutation({
      query: noticeId => ({
        url: `${NOTICES_URL}${FAVORITES_URL}/${noticeId}`,
        method: 'DELETE',
      }),
      transformResponse: response => response.data,
      invalidatesTags: [TAGS_TYPES.favorites],
      async onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
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
