# **1-dars useState**

`useState` bu Reactda komponent ichida o‘zgaradigan (ya’ni dynamic) ma’lumotni saqlash uchun ishlatiladigan funksiya. useState bilan qiymat saqlanadi va qiymat o'zgarganda, komponent avtomatik qayta chiziladi.

```jsx
const [count, setCount] = useState(0);
<p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>Increment</button>
```

- `count` — bu hozirgi qiymat (ya’ni, sanovchi).
- `setCount` — bu count ni yangilash uchun funksiya.
- `useState(0)` — boshlang‘ich qiymat 0 bo‘ladi.

- `<p>` elementi ekranda `You clicked 0 times (yoki qanchaga chiqsa, o‘sha son)` deb yozadi.
- `{count}` degani — bu JavaScript qiymatini HTML ichida chiqarish.

- `onClick` — foydalanuvchi tugmani bosganda nima bo‘lishini belgilaydi.
- `() => setCount(count + 1) `— count ni 1 taga oshiradi.

```jsx
const [inputValue, setInputValue] = useState("");
<input
  type="text"
  placeholder="Type something"
  onChange={(e) => setInputValue(e.target.value)}
/>
<p>
  You typed: <b>{inputValue}</b>
</p>
```

- `useState` orqali inputning qiymatini olish
- `onChange={(e) => setInputValue(e.target.value)}` holatida `setInputValue` inputning qiymatini `inputValue` stateiga yuklab beradi

---

# **2-dars useEffect**

`useEffect` — bu React Hook bo‘lib, komponent yuklanganda yoki ma’lum bir qiymat o‘zgarganda yon ta’sirlarni (side effects) bajarish uchun ishlatiladi. Masalan, API'dan ma'lumot olish, setInterval yoki console.log kabi funksiyalarni shu yerda yozish mumkin. useEffect ichidagi kod komponent render bo‘lgandan keyin bajariladi. Unga dependency array berilsa, faqat o‘sha qiymatlar o‘zgarganda ishga tushadi.

```jsx
useEffect(() => {
  console.log("rendered");
});
```

- ushbu holda `useEffect` ichidagi kod u tugan komponent har o'zgarishga uchraganda ishga tushadi.

```jsx
useEffect(() => {
  console.log("rendered");
}, []);
```

- Bu holda `useEffect` ichidagi kod sahifa birinchi marta yuklanganda ishga tushadi. Keyingi o'zgarishlarda ishga tushmaydi.

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("rendered");
}, [count]);
```

- ushbu holatda `useEffect` ichidagi kod unga qiymat qilib berilgan state har safar o'zgarganda ishga tushadi.

```jsx
// components/HookExample.jsx
import { useEffect } from "react";

function HookExample() {
  useEffect(() => {
    console.log("rendered");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return <div>HookExample</div>;
}

export default HookExample;

// App.jsx

const [toggle, setToggle] = useState(true);
{
  toggle && <HookExample />;
}
<button onClick={() => setToggle(!toggle)}>Toggle</button>;
```

- Ushbu holatda `useEffect` ichidagi kod `HookExample` componenti har safar sahifadan o'chirilganda ishga tushadi
- `return () => {console.log("Unmounted")};` `HookExample` komponenti sahifadan o'chirilganda shuni ichidagi kod ishlaydi

```jsx
import { useEffect, useState } from "react";

function HookExample() {
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

export default HookExample;
```

- `useState` va `useEffect` orqali timer yasash
- ushbu timer `0` dan boshlab har secunda `1` taga oshadi
- `HookExample` componenti o'chirilganda `0` ga qaytib qoladi

```jsx
import React, { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
```

- `useState` va `useEffect` orqali `API` dan malumot olish va uni ekranga chiqarish
