// config the store
import { configureStore } from '@reduxjs/toolkit';
import { commonSlice } from './slices/common';
import { navSlice } from './slices/nav';

const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    nav: navSlice.reducer
  }
});

export default store;
