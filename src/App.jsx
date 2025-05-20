import { useEffect, useState } from "react";
import HookExample from "./components/HookExample";
import DataFetcher from "./components/DataFetcher";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <br />
      {toggle && <HookExample />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      <DataFetcher />
    </div>
  );
}

export default App;
