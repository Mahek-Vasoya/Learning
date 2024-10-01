import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./action";

const initState = {
  counter: 0
};

export function applicationReducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
