import { combineReducers, Reducer } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";

const combineReducer = combineReducers({
  auth: authReducer,
});

const rootReducer: Reducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }

  return combineReducer(state, action);
};

export default rootReducer;
