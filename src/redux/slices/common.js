import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    theme: 'dark'
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});

export const { setTheme } = commonSlice.actions;
