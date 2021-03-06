import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleWare from "redux-saga";
import { rootSaga } from "../sagas";

export default configureStore = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
  sagaMiddleWare.run(rootSaga);
  return store;
};
