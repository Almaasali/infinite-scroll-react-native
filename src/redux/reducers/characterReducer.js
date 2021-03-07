import { CHARACHTER } from "../actions/actionTypes";

export function characterReducer(state = [], action) {
  switch (action.type) {
    case CHARACHTER.CHARACHTER_LOAD_SUCCESS:
      return [...state, ...action.characters];

    default:
      return state;
  }
}
