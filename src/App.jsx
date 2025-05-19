import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      {/* counter yasash */}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* state orqali inputning qiymatini olish */}
      <input
        type="text"
        placeholder="Type something"
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* state orqali olingan input qiymatini ekranga chiqarish */}
      <p>
        You typed: <b>{inputValue}</b>
      </p>
    </div>
  );
}

export default App;
