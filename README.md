# ** useRef**

`useRef` — bu React hook bo‘lib, DOM elementlarga yoki o‘zgaruvchilarga havola (reference) saqlash uchun ishlatiladi. U komponent qayta render bo‘lsa ham, qiymatini yo‘qotmaydi.

```jsx
function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
```

- ushbu holatda `App` componenti render bo'lganda input focus holatiga o'tadi

```jsx
const countRef = useRef(0);

const increment = () => {
  countRef.current += 1;
  console.log("Ref count", countRef.current);
};

<p>Count: {countRef.current}</p>
<button onClick={increment}>Click</button>
```

- `useRef` bilan `counter` yasash. Qiymatlar faqat `console` da o'zgaradi shifada emas chunki `useRef` componentni yangilamaydi
