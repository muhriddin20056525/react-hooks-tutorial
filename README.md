# **useLayoutEffect**

`useLayoutEffect` — bu React hooki bo‘lib, u DOM o‘zgarishlari amalga oshirilgandan keyin, lekin brauzer ekranini yangilashdan oldin bajariladi. Bu hook asosan sinxron ravishda effektlarni bajarish va DOM bilan darhol ishlash uchun ishlatiladi.

```jsx
useLayoutEffect(() => {
  console.log("useLayoutEffect");
}, []);
```

- `useLayoutEffect` hookidan foydalanish sintaksis va imkoniyatlar `useEffect` bilan deyarli bir xil

```jsx
import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [effectValue, setEffectValue] = useState("initial");
  const [layoutEffectValue, setLayoutEffectValue] = useState("initial");

  useEffect(() => {
    console.log("useEffect");
    setEffectValue("Uplaod");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    setLayoutEffectValue("Uplaod");
  }, []);

  return (
    <div>
      <p>useEffect value: {effectValue}</p>
      <p>useLayoutEffect value: {layoutEffectValue}</p>
    </div>
  );
}

export default App;
```

- Bu yerda `useEffect` va `useLayoutEffect` hooklari solishtirilgan
- `useLayoutEffect` ichidagi kod birinchi bo'lib ishga tushadi undan keyin esa `useEffect` ichidagi kod bajariladi
