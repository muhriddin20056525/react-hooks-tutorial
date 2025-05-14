import { useEffect, useLayoutEffect, useState } from "react";

function UseLayoutEffectHook() {
  const [effectValue, setEffectValue] = useState("initial");
  const [layoutEffectValue, setLayoutEffectValue] = useState("initial");

  useEffect(() => {
    console.log("useEffect");
    setEffectValue("Updated");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    setLayoutEffectValue("Updated");
  }, []);

  return (
    <div>
      <p>useEffect value: {effectValue}</p>
      <p>useLayoutEffect value: {layoutEffectValue}</p>
    </div>
  );
}

export default UseLayoutEffectHook;
