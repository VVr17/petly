import { createSlice } from '@reduxjs/toolkit';
import { friendsApi } from './friendsApi';

const initialState = {
  items: [],
};

export const friendsSlice = createSlice({
  name: 'friendsReducer',
  initialState,
  reducers: {
    newItems: (state, { payload }) => {
      return {
        ...state,
        items: payload,
      };
    },
  },
});

export const { newItems } = friendsSlice.actions;

export default friendsSlice.reducer;
