import { CHARACHTER } from "../actions/actionTypes";

export function characterReducer(state = [], action) {
  switch (action.typed) {
    case CHARACHTER.CHARACHTER_LOAD_SUCCESS:
      return [...state, action.characters];

    default:
      break;
  }
}
