import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const handleInputValue = () => {
    setValue(inputRef.current.value);
  };
  return (
    <div>
      <p>Input Value: {value}</p>
      <input ref={inputRef} />
      <button type="button" onClick={handleInputValue}>
        Print Input value
      </button>
    </div>
  );
};

export default UseRefHook;
