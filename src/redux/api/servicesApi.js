import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, SERVICES_URL } from 'constants/api';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getServices: builder.query({
      query: () => `${SERVICES_URL}`,
    }),
  }),
});

export const { useGetServicesQuery } = servicesApi;
