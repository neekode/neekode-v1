import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    // TODO: theme can just be useTheme().
    theme: 'dark',
    mode: 'fancy',
    colorValues: {},
    colorHexes: {},
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
    // setScroll: (state, action) => {
    //   state.scroll = action.payload;
    // },
    setColorValues: (state, action) => {
      state.colorValues = action.payload;
    },
    setColorHexes: (state, action) => {
      state.colorHexes = action.payload;
    }
  }
});

export const {
  setTheme,
  setViewport,
  setMode,
  setIsAppLoading,
  setColorValues,
  setColorHexes
} = commonSlice.actions;
