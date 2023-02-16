import { createApi } from '@reduxjs/toolkit/query/react';

import { TAGS_TYPES } from 'constants/api';
import baseQuery from 'redux/baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.user],
  endpoints: builder => ({}),
});

// export const { query } = userApi;
