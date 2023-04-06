import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notices: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, { payload }) => {
      state.notices = payload;
    },
    addFavorites: (state, { payload }) => {
      state.notices.push(payload);
    },
    removeFavorites: (state, { payload }) => {
      const index = state.notices.indexOf(payload);
      state.notices.splice(index, 1);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { setFavorites, addFavorites, removeFavorites } =
  favoritesSlice.actions;
