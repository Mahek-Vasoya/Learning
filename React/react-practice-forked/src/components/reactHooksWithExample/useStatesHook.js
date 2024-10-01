import { useState } from "react";
export default function UseStateHook() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>Use State Hook with Counter Example.</p>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
}
