import { useEffect } from "react";

function HookExample() {
  useEffect(() => {
    console.log("rerendered");

    return () => {
      console.log("Ubmounted");
    };
  }, []);

  return <div>HookExample</div>;
}

export default HookExample;
