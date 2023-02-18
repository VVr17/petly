import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './api/userApi';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { authReducer } from './api/userSlice';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userApi.middleware,
  ],
});

export const persistor = persistStore(store);

/**
 *     auth: authReducer,
 */
