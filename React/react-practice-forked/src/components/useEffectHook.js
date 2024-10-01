import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  useEffect(
    () => {
      // componentDidUpdate
      // Your code here
    },
    [
      // yourDependency
    ]
  );
  useEffect(
    () => {
      // componentWillUnmount
      return () => {
        // Your code here
      };
    },
    [
      // yourDependency
    ]
  );

  return (
    <div>
      {console.log("inside")}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(UseEffectHook);
