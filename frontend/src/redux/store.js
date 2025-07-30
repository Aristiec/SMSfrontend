import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,  auth: authReducer,
    // other reducers...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});