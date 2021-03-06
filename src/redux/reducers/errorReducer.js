import { CHARACHTER } from "../actions/actionTypes";

export function errorReducer(state = null, action) {
  switch (action.type) {
    case CHARACHTER.CHARACHTER_LOAD_FAIL:
      return action.error;
    case CHARACHTER.CHARACHTER_LOAD:
    case CHARACHTER.CHARACHTER_LOAD_FAIL:
      return null;

    default:
      state;
  }
}
