import { useEffect, useState } from "react";
const CustomComponent = ({ input = false }) => {
  const [dateTime, setDateTime] = useState(new Date());

  function updateClock() {
    setDateTime(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(updateClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [input === false]);

  if (input && Array.isArray(input)) {
    return (
      <>
        {input.map((o, index) => (
          <div key={index}>{o.toString()}</div>
        ))}
      </>
    );
  }
  if (input) {
    return <div>{input.toString()}</div>;
  }
  return (
    <div>{`${dateTime.toDateString()} ${dateTime.toLocaleTimeString()}`}</div>
  );
};

export default CustomComponent;
