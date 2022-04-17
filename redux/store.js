import { createStore, combineReducers } from "redux";
import { characterReducer } from "./reducers/characterReducer";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      character: characterReducer
    })
  );

  return store;
};
