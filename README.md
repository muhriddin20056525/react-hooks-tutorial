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
