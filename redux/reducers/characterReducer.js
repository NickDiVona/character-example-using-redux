import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = { health: 20, class: "wizard", attack: 3, location: "Tarsonis" };

export const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.DECREASE_HEALTH:
      return { ...state, health: state.health - 1 };

    case ActionTypes.RESET_HEALTH:
      return { ...state, health: 20 };

    case ActionTypes.USE_HEALTH_POTION:
      const newHealthValue = state.health + action.payload;

      return { ...state, health: newHealthValue };

    case ActionTypes.DECREASE_HEALTH_BY_AMOUNT:
      return { ...state, health: state.health - action.payload };

    default:
      return state;
  }
};
