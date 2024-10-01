export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
  payload: {}
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
  payload: {}
});

export function fetchData(formData, obj = {}) {
  return async (dispatch) => {
    dispatch(incrementCounter());
    try {
      let [response, error] = await fetch("https://jsonplaceholder.typicode.com/posts")
      dispatch(incrementCounter(response, error));
    } catch (e) {
      dispatch(
        decrementCounter(null, {
          message: e.message
        })
      );
      return;
    }
  };
}
