import { combineReducers } from "redux";
import { applicationReducer } from "./app/reducer";

const all_reducers = combineReducers({
  app: applicationReducer
});

const rootReducer = (state, action) => all_reducers(state, action);

export default rootReducer;

// combining add reducers
