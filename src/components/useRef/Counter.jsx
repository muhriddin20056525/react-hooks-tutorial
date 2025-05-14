import React, { useRef } from "react";

function Counter() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  return (
    <div>
      <h2>{countRef.current}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
