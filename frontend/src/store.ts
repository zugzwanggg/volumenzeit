import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './features/UserSlice/UserSlice';
import { userApi } from './features/api/UserApi';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware)
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
