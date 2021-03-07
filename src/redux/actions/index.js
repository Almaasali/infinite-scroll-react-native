import { CHARACTER } from "./actionTypes";

export const loadCharacters = () => {
  return {
    type: CHARACTER.CHARACTER_LOAD,
  };
};

export const setCharacters = (characters) => {
  return {
    type: CHARACTER.CHARACTER_LOAD_SUCCESS,
    characters,
  };
};

export const setError = (error) => {
  return {
    type: CHARACTER.CHARACTER_LOAD_FAIL,
    error,
  };
};
export const setPagesCount = (pagesCount) => {
  return {
    type: CHARACTER.CHARACTER_HAS_MORE_DATA,
    pagesCount,
  };
};
