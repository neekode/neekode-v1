import { createSlice } from '@reduxjs/toolkit';

const initialTabs = [
  {
    id: 1,
    name: 'intro',
    selected: false,
    route: '/'
  },
  {
    id: 2,
    name: 'profession',
    selected: false,
    route: '/profession'
  },
  {
    id: 3,
    name: 'works',
    selected: false,
    route: '/works'
  },
  {
    id: 4,
    name: 'contact',
    selected: false,
    route: '/contact'
  }
];

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    tabs: initialTabs
  },
  reducers: {
    setSelected: (state, action) => {
      const { route } = action.payload;
      // state.tabs[route].selected = true;
      state.tabs.forEach((tab) => tab.selected = tab.route === route);
    },
    scroll: (state, action) => {
      state.selected = action.payload;
    }
  }
});

export const {
  setSelected
} = navSlice.actions;
