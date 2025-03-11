import { configureStore } from '@reduxjs/toolkit';
import sportReducer from './sportSlice';

export const store = configureStore({
  reducer: {
    sportList: sportReducer,
  },
});

export default store;
