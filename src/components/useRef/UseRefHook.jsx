import React, { useEffect, useRef } from "react";
import Counter from "./Counter";

function UseRefHook() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleShowValue = () => {
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" placeholder="Type something..." ref={inputRef} />
      <button onClick={handleShowValue}>Send</button>
      <p>You typed: </p>

      <Counter />
    </div>
  );
}

export default UseRefHook;
