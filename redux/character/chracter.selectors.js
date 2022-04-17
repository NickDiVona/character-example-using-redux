import { createSelector } from "@reduxjs/toolkit";

// base selector for the character part of the redux state
export const characterSelector = (state) => state.character;

// reducer for specific subsect of the character state
export const characterHealthSelector = createSelector(characterSelector, (state) => state.health);
