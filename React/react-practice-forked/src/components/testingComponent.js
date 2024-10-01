import { useEffect, useState } from "react";

const TestingComponent = () => {
  let [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      Testing Component
      <button type="button" onClick={handleCount}>
        +
      </button>
      <AnotherComponent count={count} />
    </div>
  );
};
export default TestingComponent;

const AnotherComponent = ({ count }) => {
  const [counter, setCounter] = useState(undefined);
  useEffect(() => {
    console.log("inside another ", count);
    setCounter(count);
  }, [count]);
  return <div>{counter}</div>;
};
