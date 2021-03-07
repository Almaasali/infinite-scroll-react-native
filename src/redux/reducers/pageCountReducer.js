import { CHARACTER } from "../actions/actionTypes";

export function pageCountReducer(state = 0, action) {
  switch (action.type) {
    case CHARACTER.CHARACTER_HAS_MORE_DATA:
      return action.pagesCount;

    default:
      return state;
  }
}
