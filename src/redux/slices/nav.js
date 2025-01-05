import { createSlice } from '@reduxjs/toolkit';

const initialTopTabs = [
  {
    id: 'intro',
    label: 'intro',
    link: '#intro',
    isActive: true,
    isLoaded: false
  },
  {
    id: 'my-story',
    link: '#my-story',
    label: 'my story',
    isActive: false,
    isLoaded: false
  },
  {
    id: 'code',
    label: 'code',
    link: '#code',
    isActive: false,
    isLoaded: false
  },
  {
    id: 'projects',
    label: 'projects',
    link: '#projects',
    isActive: false,
    isLoaded: false
  }
];

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    topTabs: initialTopTabs,
    selectedIndex: 0
  },
  reducers: {
    selectByLink: (state, action) => {
      const { route } = action.payload;
      state.selectedIndex = state.topTabs.findIndex((tab) => tab.route === route);
    },
    setIsTabLoaded: (state, action) => {
      const { id } = action.payload;
      // When profile picture exists in the sections, it is treated as the intro component.
      const targetTabIndex = id !== 'profile-picture' ? state.topTabs.findIndex((tab) => tab.id === id) : 0;
      state.topTabs[targetTabIndex].isLoaded = true;
    },
    setIsTabActive: (state, action) => {
      const {
        id,
        isActive
      } = action.payload;

      // Loop through all tabs to reset their isActive state
      state.topTabs.forEach((tab) => {
        tab.isActive = tab.id === id ? isActive : false;
      });

      // Update the selected index
      const targetTabIndex = id !== 'profile-picture' ? state.topTabs.findIndex((tab) => tab.id === id) : 0;
      state.selectedIndex = targetTabIndex;
    }
  }
});

export const {
  selectByLink,
  setIsTabLoaded,
  setIsTabActive
} = navSlice.actions;
