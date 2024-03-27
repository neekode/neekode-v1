import { createSlice } from '@reduxjs/toolkit';

// const initialState = [];

export const backgroundSlice = createSlice({
  name: 'nav',
  initialState: {
    // Quantity of shapes.
    amount: 50,
    // Size of shapes
    radius: 2,
    // Speed at which the balls are travelling.
    speed: 0.1,
    // Tracks the interval of consecutive draws.
    // Necessary to unify single interval, not creating others.
    interval: {},
    isControllerOpen: false
  },
  reducers: {
    setBallPitVars: (state, action) => {
      const {
        amount: newAmount,
        radius: newRadius,
        speed: newSpeed
      } = action.payload;

      if (newAmount) {
        state.amount = newAmount;
      }
      if (newRadius) {
        state.radius = newRadius;
      }
      if (newSpeed) {
        state.speed = newSpeed;
      }
    },
    setIntervalObj: (state, action) => {
      state.interval = action.payload;
    },
    setIsControllerOpen: (state, action) => {
      state.isControllerOpen = action.payload;
    }
  }
});

export const {
  setBallPitVars,
  setIntervalObj,
  setIsControllerOpen
} = backgroundSlice.actions;
