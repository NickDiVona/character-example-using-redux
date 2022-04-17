import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./character/character.reducer";

export const store = configureStore({
  // similar to combineReducers from redux
  reducer: {
    character: characterReducer
  }
  //add middleware if you have it here
});
