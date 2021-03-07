import { CHARACTER } from "../actions/actionTypes";

export function errorReducer(state = null, action) {
  switch (action.type) {
    case CHARACTER.CHARACTER_LOAD_FAIL:
      return action.error;
    case CHARACTER.CHARACTER_LOAD:
    case CHARACTER.CHARACTER_LOAD_FAIL:
      return null;

    default:
      return state;
  }
}
