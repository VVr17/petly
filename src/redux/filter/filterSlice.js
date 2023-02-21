import { createSlice } from '@reduxjs/toolkit';
import { statusFilter } from './filterConstans';

const filterInitialState = {
  status: statusFilter.sell,
};

const filterSlice = createSlice({
  name: 'noticesFilter',
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
