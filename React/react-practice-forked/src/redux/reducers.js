import { combineReducers } from "redux";
import { applicationReducer } from "./app/reducer";
const all_reducers = combineReducers({
  app: applicationReducer
});

// reset the state of a redux store
var _ = require("lodash");
const rootReducer = (state, action) => {
  // common action
  if (action.type === "RESET_STATE") {
    let obj = action.payload.states;
    Object.keys(obj).forEach(function (key) {
      var val = obj[key];
      state = _.set(state, key, val);
    });
  }
  return all_reducers(state, action);
};

export default rootReducer;
