import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './api/userApi';
import { newsApi } from './api/newsApi';
import { friendsApi } from './api/friendsApi';
import FriendsReducer from './api/friendsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedUserReducer } from './api/userSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: persistedUserReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware, newsApi.middleware, friendsApi.middleware),
});

export const persistor = persistStore(store);
