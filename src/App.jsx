import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [effectValue, setEffectValue] = useState("initial");
  const [layoutEffectValue, setLayoutEffectValue] = useState("initial");

  useEffect(() => {
    console.log("useEffect");
    setEffectValue("Uplaod");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    setLayoutEffectValue("Uplaod");
  }, []);

  return (
    <div>
      <p>useEffect value: {effectValue}</p>
      <p>useLayoutEffect value: {layoutEffectValue}</p>
    </div>
  );
}

export default App;
