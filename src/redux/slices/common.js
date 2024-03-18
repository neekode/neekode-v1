import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    theme: 'dark',
    mode: 'fancy',
    scroll: {
      direction: '',
      changes: 0
    },
    viewport: {
      height: 0,
      width: 0,
      isMobile: false
    },
    loading: {
      app: true
    }
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setViewport: (state, action) => {
      state.viewport = action.payload;
    },
    setIsAppLoading: (state, action) => {
      state.loading = {
        ...state.loading,
        app: action.payload
      };
    },
    setScroll: (state, action) => {
      state.scroll = action.payload;
    }
  }
});

export const {
  setTheme,
  setViewport,
  setMode,
  setScroll,
  setIsAppLoading
} = commonSlice.actions;
