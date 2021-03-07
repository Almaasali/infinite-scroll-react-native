import { all } from "redux-saga/effects";
import charachtersSaga from "./charactersSaga";

export function* rootSaga() {
  yield all([charachtersSaga()]);
}
