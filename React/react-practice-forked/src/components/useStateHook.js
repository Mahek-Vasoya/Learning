import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      Counter: {count}
      &nbsp;
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default UseStateHook;
