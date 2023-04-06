import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { favoritesReducer } from './favorites/favoritesSlice';
import { filterReducer } from './filter/filterSlice';
import { friendsApi } from './api/friendsApi';
import { newsApi } from './api/newsApi';
import { noticesApi } from './api/noticesApi';
import { persistedUserReducer } from './user/userSlice';
import { petsApi } from './api/petsApi';
import { userApi } from './api/userApi';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
    [petsApi.reducerPath]: petsApi.reducer,
    user: persistedUserReducer,
    noticesFilter: filterReducer,
    favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      userApi.middleware,
      newsApi.middleware,
      noticesApi.middleware,
      petsApi.middleware,
      friendsApi.middleware
    ),
});

export const persistor = persistStore(store);
