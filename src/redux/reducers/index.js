import { combineReducers } from "redux";
import { characterReducer } from "./characterReducer";
import { errorReducer } from "./errorReducer";
import { loadingReducer } from "./loadingReducer";
import { pageCountReducer } from "./pageCountReducer";
import { pageReducer } from "./pageReducer";

export default rootReducer = combineReducers({
  characters: characterReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  nextPage: pageReducer,
  pagesCount: pageCountReducer,
});
