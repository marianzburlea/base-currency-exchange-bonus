import { SET_CURRENT_RATE } from "./exchange-rator-list.constant";

export const setCurrentRate = rate => ({
  type: SET_CURRENT_RATE,
  rate
});
