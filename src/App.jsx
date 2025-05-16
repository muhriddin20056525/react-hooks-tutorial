import { useState } from "react";
import UseLayoutEffectHook from "./components/useLayoutEffect/UseLayoutEffectHook";
import UseRefHook from "./components/useRef/UseRefHook";
import ThemeSwitcher from "./components/useContact/ThemeSwitcher";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {/* ============================== useEffect ============================== */}

      {/* {toggle && <UseEffectHook />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <DataFetcher /> */}

      {/* ============================== useLayoutEffect ============================== */}
      {/* <UseLayoutEffectHook /> */}

      {/* ============================== useRef ============================== */}
      <UseRefHook />

      <br />
      {/* ============================== useContext ============================== */}
      <ThemeSwitcher />
    </div>
  );
}

export default App;
