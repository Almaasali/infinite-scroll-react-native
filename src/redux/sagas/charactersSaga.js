import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { setCharacters, setError, setPagesCount } from "../actions";
import { CHARACTER } from "../actions/actionTypes";
import { fetchCharacters } from "../api";

// get the page number
const getNextPage = (state) => {
  return state.nextPage;
};
// get the pages count
const getPagesCount = (state) => {
  console.log("pages count:", state.pagesCount);
  return state.pagesCount;
};

function* handleCharactersLoad() {
  try {
    const page = yield select(getNextPage);
    const pagesCount = yield select(getPagesCount);
    if (pagesCount === 0 || page <= pagesCount) {
      const characters = yield call(fetchCharacters, page);
      yield put(setCharacters(characters[1]));
      yield put(setPagesCount(characters[0]));
    }
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchCharactersLoad() {
  yield takeEvery(CHARACTER.CHARACTER_LOAD, handleCharactersLoad);
}
