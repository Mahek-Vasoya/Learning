import rootReducer from "./reducers";
import { createStore } from "redux";

export default () => {
  return createStore(rootReducer);
};
// creating store
