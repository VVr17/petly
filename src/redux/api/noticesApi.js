import { createApi } from '@reduxjs/toolkit/query/react';
import { NOTICES_URL } from 'constants/api';
import baseQuery from 'redux/baseQuery';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery,
  endpoints: builder => ({
    getNoticeByCategory: builder.query({
      query: categoryName => `${NOTICES_URL}/category/${categoryName}`,
    }),
    getFavorite: builder.query({
      query: () => `${NOTICES_URL}/category/favorites`,
    }),
  }),
});

export const { useGetNoticeByCategoryQuery, useGetFavoriteQuery } = noticesApi;
