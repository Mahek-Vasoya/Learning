import { useEffect, useState } from "react";
export default function UseEffectHook() {
  const [userData, setUserData] = useState([]);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
    console.log("useEffect");
  }, [counter]);

  return (
    <>
      {console.log("return")}
      <p>Use Effect Hook with fetch user data and deplay list.</p>

      <button onClick={() => setCounter(counter + 1)}>
        Counter + {counter}
      </button>
      <ul>
        {userData.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
