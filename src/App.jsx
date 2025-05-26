import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Ref count", countRef.current);
  };

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />

      <p>Count: {countRef.current}</p>
      <button onClick={increment}>Click</button>
    </div>
  );
}

export default App;
