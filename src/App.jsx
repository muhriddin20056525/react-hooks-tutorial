import { useState } from "react";
import UseLayoutEffectHook from "./components/useLayoutEffect/UseLayoutEffectHook";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {/* ============================== useEffect ============================== */}

      {/* {toggle && <UseEffectHook />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <DataFetcher /> */}

      {/* ============================== useLayoutEffect ============================== */}
      <UseLayoutEffectHook />
    </div>
  );
}

export default App;
