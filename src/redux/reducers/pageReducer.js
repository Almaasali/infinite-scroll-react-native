import { CHARACHTER } from "../actions/actionTypes";

export function pageReducer(state = 1, action) {
  if (CHARACHTER.CHARACHTER_LOAD_SUCCESS) {
    return state + 1;
  }
  return state;
}
