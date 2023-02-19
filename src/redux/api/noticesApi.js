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
  }),
});

export const { useGetNoticeByCategoryQuery } = noticesApi;
