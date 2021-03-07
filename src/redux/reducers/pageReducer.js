import { CHARACTER } from "../actions/actionTypes";

export function pageReducer(state = 1, action) {
  switch (action.type) {
    case CHARACTER.CHARACTER_LOAD_SUCCESS:
      return state + 1;

    default:
      return state;
  }
}
