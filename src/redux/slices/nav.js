import { createSlice } from '@reduxjs/toolkit';

const initialTabs = [
  {
    name: 'intro',
    route: '/'
  },
  {
    name: 'profession',
    route: '/profession'
  },
  {
    name: 'code',
    route: '/code'
  },
  {
    name: 'projects',
    route: '/projects'
  }
];

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    tabs: initialTabs,
    selectedIndex: 0
  },
  reducers: {
    selectByRoute: (state, action) => {
      const { route } = action.payload;
      state.selectedIndex = state.tabs.findIndex((tab) => tab.route === route);
    },
    selectByWheel: (state, action) => {
      const { direction } = action.payload;
      const isScrollDown = direction === 'down';
      const current = state.selectedIndex;
      const endLimit = state.tabs.length - 1;

      let newIndex;
      if (isScrollDown) {
        if (current < endLimit) {
          newIndex = current + 1;
        } else {
          newIndex = 0;
        }
      } else if (current <= endLimit && current !== 0) {
        newIndex = current - 1;
      } else {
        newIndex = endLimit;
      }
      state.selectedIndex = newIndex;
    }
  }
});

export const {
  selectByRoute,
  selectByWheel
} = navSlice.actions;
