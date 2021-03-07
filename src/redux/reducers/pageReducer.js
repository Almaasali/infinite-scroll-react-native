import { CHARACHTER } from "../actions/actionTypes";

export function pageReducer(state = 1, action) {
  switch (action.type) {
    case CHARACHTER.CHARACHTER_LOAD_SUCCESS:
      return state + 1;

    default:
      return state;
  }
}
