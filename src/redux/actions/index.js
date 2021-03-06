import { CHARACHTER } from "./actionTypes";

export const loadCharacters = () => {
  return {
    type: CHARACHTER.CHARACHTER_LOAD,
  };
};

export const setCharacters = (characters) => {
  return {
    type: CHARACHTER.CHARACHTER_LOAD_SUCCESS,
    characters,
  };
};

export const setError = (error) => {
  return {
    type: CHARACHTER.CHARACHTER_LOAD_FAIL,
    error,
  };
};
