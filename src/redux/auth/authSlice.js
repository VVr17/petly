import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // setToken: (state, { payload }) => ({
    //   ...state,
    //   token: payload,
    // }),
    setUser: (state, { payload: { token, user } }) => ({
      ...state,
      user,
      token,
      isAuth: true,
    }),
    logout: () => initialState,
  },
});

export const authReducer = authSlice.reducer;

export const { logout, setUser, setToken } = authSlice.actions;
