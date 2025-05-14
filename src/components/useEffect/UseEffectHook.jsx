import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []);

  useEffect(() => {
    console.log("rendered");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return <p>Seconds elapsed: {second}</p>;
}

export default UseEffectHook;
