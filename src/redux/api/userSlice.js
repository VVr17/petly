import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  user: null,
  token: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => ({
      ...state,
      user: payload.user,
      token: payload.token,
      isAuth: true,
    }),
    logout: () => initialState,
  },
});

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const authReducer = authSlice.reducer;

export const { logout, setUser, setToken } = authSlice.actions;

export const persistedUserReducer = persistReducer(persistConfig, authReducer);

/**
 * 
const initialState = {
  name: null,
  city: null,
  phone: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isError: null,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {
    builder
      .addMatcher(
        userApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          const { user, token } = payload;

          state.email = user.email;
          state.city = user.city;
          state.name = user.name;
          state.phone = user.phone;
          state.token = token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        userApi.endpoints.loginUser.matchRejected,
        (state, { payload }) => {
          if (payload.status === 400) {
            state.isError = true;
          }
        }
      )

      .addMatcher(
        userApi.endpoints.signupUser.matchFulfilled,
        (state, { payload }) => {
          const { user, token } = payload;

          state.name = user.name;
          state.city = user.city;
          state.phone = user.phone;
          state.email = user.email;
          state.token = token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(userApi.endpoints.logoutUser.matchFulfilled, state => {
        state.name = null;
        state.city = null;
        state.phone = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        userApi.endpoints.getCurrentUser.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.name;
          state.city = payload.city;
          state.phone = payload.phone;
          state.email = payload.email;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        userApi.endpoints.getCurrentUser.matchRejected,
        (state, { payload }) => {
          state.name = null;
          state.city = null;
          state.phone = null;
          state.email = null;
          state.isLoggedIn = false;
        }
      );
  },
});
 */
