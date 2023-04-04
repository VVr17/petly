import { createApi } from '@reduxjs/toolkit/query/react';
import { PETS_URL, TAGS_TYPES } from 'constants/api';
import baseQuery from 'redux/baseQuery';
import { userApi } from './userApi';

export const petsApi = createApi({
  reducerPath: 'petsApi',
  baseQuery,
  tagTypes: [TAGS_TYPES.pet],
  endpoints: builder => ({
    // Adds a new user's pet.
    addPet: builder.mutation({
      query: newPetData => ({
        url: `${PETS_URL}`,
        method: 'POST',
        body: newPetData,
      }),
      invalidatesTags: [TAGS_TYPES.pet],
      transformResponse: response => response.data,
      // This function is triggered when the query is started: invalidate user tag to fetch/update user's data
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(userApi.util.invalidateTags([TAGS_TYPES.user]));
        } catch (err) {
          console.log('error... ', err);
        }
      },
    }),

    // Deletes user's pet.
    deletePet: builder.mutation({
      query: petId => ({
        url: `${PETS_URL}/${petId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TAGS_TYPES.pet],
      transformResponse: response => response.data,
      // This function is triggered when the query is started: invalidate user tag to fetch/update user's data
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(userApi.util.invalidateTags([TAGS_TYPES.user]));
        } catch (err) {
          console.log('error... ', err);
        }
      },
    }),
  }),
});

export const { useAddPetMutation, useDeletePetMutation } = petsApi;
