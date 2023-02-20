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
import { servicesApi } from './api/servicesApi';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
    [petsApi.reducerPath]: petsApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    user: persistedUserReducer,
    noticesFilter: filterReducer,
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
      servicesApi.middleware
    ),
});

export const persistor = persistStore(store);
