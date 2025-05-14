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

---

# **3-dars useLayoutEffect**

`useLayoutEffect` — bu React hook bo‘lib, u component DOMga joylashtirilgandan darhol, lekin foydalanuvchiga ko‘rsatilishidan oldin ishlaydi. Bu hook asosan DOM o‘lchamlarini olish, scroll pozitsiyasini o‘rnatish yoki chizilishdan oldin DOM’ni o‘zgartirish uchun kerak bo‘ladi. useEffect dan farqli ravishda, bu effekt sinxron bajariladi, ya’ni React chizishni to‘xtatib turadi. Faqat kerak bo‘lsa ishlatiladi, aks holda useEffect kifoya.

```ts
import React, { useEffect, useLayoutEffect, useState } from "react";

function UseLayoutEffect() {
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

export default UseLayoutEffect;
```

- Bu yerda `useEffect` va `useLayoutEffect` orqali bir xil ish bajarilgan lekin birinchi bo'lib `useLayoutEffect` ishga tushadi uning ortidan esa `useEffect`

---

# **4-dars useRef**

`useRef` — bu React hook bo‘lib, u DOM elementlarga murojaat qilish yoki komponentlar o‘rtasida o‘zgarmas qiymatlarni saqlash uchun ishlatiladi. U current degan property orqali qiymatni saqlaydi va komponent qayta render bo‘lsa ham shu qiymat o‘zgarishsiz qoladi.

```jsx
useEffect(() => {
  // shifa yangilanganda ref bog'langan input aftamatiski focus holatiga o'tadi
  inputRef.current && inputRef.current.focus();
}, []);

// useRef elon qilish
const inputRef = useRef(null);

// ref atributi orqali inputga bog'lash
<input type="text" placeholder="Type something..." ref={inputRef} />;
```

- `useRef` yaratish va undan foydalanish

```jsx
const inputRef = useRef(null);

const handleShowValue = () => {
  // inputning qiymati shu yerda saqlanadi
  alert(inputRef.current.value);
};

<input type="text" placeholder="Type something..." ref={inputRef} />
<button onClick={handleShowValue}>Send</button>
```

- `useRef` orqali inputning qiymatini olish
