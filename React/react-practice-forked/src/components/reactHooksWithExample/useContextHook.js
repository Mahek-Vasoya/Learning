import React, { useState, useContext } from "react";

const CounterContext = React.createContext();

export default function UseContextHook() {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={counter}>
      {console.log("UseContextHook")}
      <p>Use Context Hook with Counter Example.</p>
      <CounterShow />
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </CounterContext.Provider>
  );
}

const CounterShow = () => {
  console.log("CounterShow");
  const counter = useContext(CounterContext);
  return <p>Counter: {counter}</p>;
};
