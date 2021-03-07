import { CHARACTER } from "../actions/actionTypes";

export function loadingReducer(state = false, action) {
  switch (action.type) {
    case CHARACTER.CHARACTER_LOAD:
      return true;
    case CHARACTER.CHARACTER_LOAD_SUCCESS:
      return false;
    case CHARACTER.CHARACTER_LOAD_FAIL:
      return false;

    default:
      return state;
  }
}
