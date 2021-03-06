import { CHARACHTER } from "../actions/actionTypes";

export function loadingReducer(state = false, action) {
  switch (action.type) {
    case CHARACHTER.CHARACHTER_LOAD:
      return true;
    case CHARACHTER.CHARACHTER_LOAD_SUCCESS:
      return false;
    case CHARACHTER.CHARACHTER_LOAD_FAIL:
      return false;

    default:
      return state;
  }
}
