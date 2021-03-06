import { all } from "redux-saga/effects";
import charachterSaga from "./characterSaga";

export function* rootSaga() {
  yield all([charachterSaga()]);
}
