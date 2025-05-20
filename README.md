# **useEffect**

`useEffect` — bu React hook bo‘lib, komponent yuklanganda yoki ma’lum qiymatlar o‘zgarganda yon ta’sir (masalan, API chaqiruv, setTimeout, addEventListener) bajarish uchun ishlatiladi.

```jsx
useEffect(() => {
  console.log("rerendered");
}, []);
```

- `useEffect` dan foydalanish
- Sahifa render bo'lgandagina faqat bir marta ishga tushadi

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("rerendered");
}, [count]);

<h3>{count}</h3>
<button onClick={() => setCount(count + 1)}>Click</button>
```

- `count` statei har safar o'zgarganda `useEffect` ishga tushadi

```jsx
// App.jsx
const [toggle, setToggle] = useState(false);

{
  toggle && <HookExample />;
}
<button onClick={() => setToggle(!toggle)}>Toggle</button>;

// components/HookExample.jsx

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
```

- Bu yerda `useEffect` ning unmount holati ko'rsatilgan
- `HookExample` componenti `App.js` dan olib tashlanganda `useEffect return() => {}` ichidagi kod ishga tushadi

```jsx
import { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
```

- `useState` va `useEffect` orqali apidan malumot olib ekranga chiqarish
