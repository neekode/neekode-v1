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
  setMode,
  setScroll,
  setIsAppLoading
} = commonSlice.actions;
