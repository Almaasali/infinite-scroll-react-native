import { CHARACTER } from "../actions/actionTypes";

export function characterReducer(state = [], action) {
  switch (action.type) {
    case CHARACTER.CHARACTER_LOAD_SUCCESS:
      return [...state, ...action.characters];

    default:
      return state;
  }
}
