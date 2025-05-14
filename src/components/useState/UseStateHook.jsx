function UseStateHook() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

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
    </div>
  );
}

export default UseStateHook;
