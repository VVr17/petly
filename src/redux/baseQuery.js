import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'constants/api';

export default fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
