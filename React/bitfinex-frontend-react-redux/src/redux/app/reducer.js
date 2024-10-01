import { FETCH_DATA_START, FETCH_DATA_END } from "./action";

const initState = {
  data: null,
  isLoading: false
};

export function applicationReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        data: null,
        isLoading: true
      };

    case FETCH_DATA_END:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
