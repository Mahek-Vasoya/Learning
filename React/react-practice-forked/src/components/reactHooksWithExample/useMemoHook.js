import React, { useMemo, useState } from "react";

export default function UseMemoHook() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const increment1 = () => {
    setCounter1(counter1 + 1);
  };
  const increment2 = () => {
    setCounter2(counter2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    console.log("inside isEven logic");
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <>
      <p>Use Memo Hook with Counter Example.</p>
      <button onClick={increment1}>+ Counter 1</button>
      {counter1}
      <span> {isEven ? "Even" : "odd"}</span>
      <br />
      <button onClick={increment2}>+ Counter 2</button>
      {counter2}
    </>
  );
}
