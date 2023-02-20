import { createSlice } from '@reduxjs/toolkit';
import {statusFilter} from './filterConstans'

const filterInitialState = {
  status: statusFilter,
};

const filterSlice = createSlice({
  name: 'notice',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;