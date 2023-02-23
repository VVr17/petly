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
import { persistedUserReducer } from './user/userSlice';
import { userApi } from './api/userApi';
import { newsApi } from './api/newsApi';
import { noticesApi } from './api/noticesApi';
import { petsApi } from './api/petsApi';
import { friendsApi } from './api/friendsApi';
import { filterReducer } from './filter/filterSlice';
import { favoritesReducer } from './favorites/favoritesSlice';

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
