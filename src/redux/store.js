// config the store
import { configureStore } from '@reduxjs/toolkit';
import { commonSlice } from './slices/common';
import { navSlice } from './slices/nav';
import { backgroundSlice } from './slices/background';

const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    background: backgroundSlice.reducer,
    nav: navSlice.reducer
  }
});

export default store;
