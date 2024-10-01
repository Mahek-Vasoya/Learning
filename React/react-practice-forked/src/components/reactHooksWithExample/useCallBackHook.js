import React, { useState, useCallback } from "react";
/*
use call back hook to prevent rerendering to improve preformance 
we can use React.memo() (HOC) to resolve this problem it props get change
then should render component
So we can also use useCallback Hooks
useCallBack hook is  a hook will return a memoized version of call back
function that only change if  one of the dependencies has changed
*/

export default function UseCallBackHook() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <>
      <p>Use Call Back Hook with Counter Example.</p>
      <Title text="title component" />
      <Counter text="Age" counter={age} />
      <Button text="Age" onClick={incrementAge} />
      <Counter text="Salary" counter={salary} />
      <Button text="Salary" onClick={incrementSalary} />
    </>
  );
}

const Title = React.memo((props) => {
  console.log(`Render ${props.text} Title`);
  return <h1>Title: {props.text}</h1>;
});

const Counter = React.memo((props) => {
  console.log(`Render ${props.text} Counter`);
  return (
    <h1>
      {props.text}: {props.counter}
    </h1>
  );
});

const Button = React.memo((props) => {
  console.log(`Render ${props.text} Button`);
  return (
    <button type="button" onClick={props.onClick}>
      Increment: {props.text}
    </button>
  );
});
