import * as ActionTypes from "./actionTypes";

export const decreaseHealth = () => ({
  type: ActionTypes.DECREASE_HEALTH
});

export const resetHealth = () => ({
  type: ActionTypes.RESET_HEALTH
});

export const decreaseHealthByAmount = (damage, currentHp) => {
  // prevents your health from going below the death threshold (0 HP)
  if (currentHp - damage <= 0) {
    return {
      type: ActionTypes.DECREASE_HEALTH_BY_AMOUNT,
      payload: currentHp
    };
  }

  // take 4 damage (damage would change if another one was inputted)
  return {
    type: ActionTypes.DECREASE_HEALTH_BY_AMOUNT,
    payload: damage
  };
};

export const useHealthPotion = (currentHp) => {
  // prevents your health from going above max (20 HP)
  if (currentHp > 15) {
    return {
      type: ActionTypes.USE_HEALTH_POTION,
      payload: 20 - currentHp
    };
  }

  // heal for the standard (5 HP)
  return {
    type: ActionTypes.USE_HEALTH_POTION,
    payload: 5
  };
};
