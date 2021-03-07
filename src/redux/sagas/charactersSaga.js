import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { setCharacters, setError } from "../actions";
import { CHARACHTER } from "../actions/actionTypes";
import { fetchCharacters } from "../api";

// get the page number
const getNextPage = (state) => state.nextPage;

function* handleCharactersLoad() {
  try {
    const page = select(getNextPage);
    const characters = yield call(fetchCharacters, page);
    yield put(setCharacters(characters));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchCharactersLoad() {
  yield takeEvery(CHARACHTER.CHARACHTER_LOAD, handleCharactersLoad);
}
