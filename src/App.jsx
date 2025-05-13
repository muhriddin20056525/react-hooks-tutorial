import { useEffect, useState } from "react";
import HookExample from "./components/HookExample";
import DataFetcher from "./components/DataFetcher";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <input
        type="text"
        placeholder="Type something"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>
        You typed: <b>{inputValue}</b>
      </p>

      {toggle && <HookExample />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <DataFetcher />
    </div>
  );
}

export default App;
