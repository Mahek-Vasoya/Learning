import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  fetchData
} from "../../redux/app/action";
const connectedProps = (state) => ({
  counter: state.app.counter
});

const connectionActions = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
  fetchData: fetchData
};

var connector = connect(connectedProps, connectionActions);

const CounterApp = (props) => {
  useEffect(() => {
    console.log(props);
    props.fetchData();
  }, [props]);
  return (
    <div>
      <p>Counter: {props.counter}</p>
      <button onClick={() => props.incrementCounter()}>+</button>
      <button onClick={() => props.decrementCounter()}>-</button>
    </div>
  );
};

export default connector(CounterApp);
