import React, { useEffect, useRef } from "react";

export default function UseRefHook() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.value = "100";
    inputRef.current.focus();
  }, []);
  return (
    <>
      <p>Use Ref Hook with On Load Focus on input.</p>
      <input value="" ref={inputRef} />
    </>
  );
}
