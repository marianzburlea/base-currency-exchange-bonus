import { createContext, useContext } from "react";
import { SET_CURRENT_RATE } from "../component/exchange-rator-list/exchange-rator-list.constant";

export const initialState = {
  currentRate: "GBP"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_RATE:
      return {
        ...state,
        currentRate: action.rate
      };
    default:
      return state;
  }
};

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();
export const getState = property => useContext(StateContext);
