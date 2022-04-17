import { createSlice } from "@reduxjs/toolkit";

const initialState = { health: 20, class: "wizard", attack: 3, location: "Tarsonis" };

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    decreaseHealth: (state) => {
      state.health -= 1;
    },
    resetHealth: (state) => {
      state.health = initialState.health;
    },
    useHealthPotion: (state) => {
      if (state.health + 5 >= initialState.health) {
        state.health = initialState.health;
      } else {
        state.health += 5;
      }
    },
    decreaseHealthByAmount: (state, action) => {
      if (state.health - action.payload <= 0) {
        state.health = 0;
      } else {
        state.health -= action.payload;
      }
    }
  }
});

// export the updater functions
export const { decreaseHealth, resetHealth, useHealthPotion, decreaseHealthByAmount } =
  characterSlice.actions;

// export the reducer itself
export default characterSlice.reducer;
