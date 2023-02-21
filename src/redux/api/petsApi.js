import { createApi } from '@reduxjs/toolkit/query/react';
import { PETS_URL, TAGS_TYPES } from 'constants/api';
import baseQuery from 'redux/baseQuery';

export const petsApi = createApi({
  reducerPath: 'petsApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.pet],
  endpoints: builder => ({
    addPet: builder.mutation({
      query: newPetData => ({
        url: `${PETS_URL}`,
        method: 'POST',
        body: newPetData,
      }),
      invalidatesTags: [TAGS_TYPES.pet],
      transformResponse: response => response.data,
    }),
    deletePet: builder.mutation({
      query: petId => ({
        url: `${PETS_URL}/${petId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TAGS_TYPES.pet],
      transformResponse: response => response.data,
    }),
  }),
});

export const { useAddPetMutation, useDeletePetMutation } = petsApi;
