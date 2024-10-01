import React, { useCallback, useState } from "react";
// use memo and use callback work as same
const UseCallBackHook = () => {
  const [myCounter, setMyCounter] = useState(0);
  const increment = useCallback(() => {
    console.log("inside increment");
    setMyCounter(myCounter + 1);
  }, [myCounter]);
  const decrement = useCallback(() => {
    console.log("inside decrement");
    setMyCounter(myCounter - 1);
  }, [myCounter]);
  return (
    <>
      <p>MyCOunter: {myCounter}</p>
      <button onClick={increment}>Increment my Counter</button>
      <button onClick={decrement}>Decrement my Counter</button>
    </>
  );
};

export default UseCallBackHook;
