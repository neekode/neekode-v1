import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    theme: 'dark',
    mode: 'fancy',
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
    }
  }
});

export const {
  setTheme,
  setMode,
  setIsAppLoading
} = commonSlice.actions;
