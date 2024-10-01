import React, { useReducer } from "react";
const initialValye = { counter: 0 };
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT": {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    default:
      return state;
  }
};
export default function UseContextHook() {
  const [state, dispatch] = useReducer(reducer, initialValye);
  return (
    <>
      <p>Use Reducer Hook with Counter Example.</p>
      <p>Counter: {state.counter}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
    </>
  );
}
