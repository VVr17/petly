import { createApi } from '@reduxjs/toolkit/query/react';
import { PETS_URL } from 'constants/api';
import baseQuery from 'redux/baseQuery';

export const petsApi = createApi({
  reducerPath: 'petsApi',
  baseQuery,
  endpoints: builder => ({
    addPet: builder.mutation({
      query: newPetData => ({
        url: `${PETS_URL}`,
        method: 'POST',
        body: newPetData,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          // TODO: check if need to trigger user data to update
        } catch (error) {}
      },
    }),
  }),
});

export const { useAddPetMutation } = petsApi;
