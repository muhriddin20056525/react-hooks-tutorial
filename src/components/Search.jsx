import { useState, useTransition } from "react";

function Search({ items }) {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  // useTransition hookini elon qilish
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Bu ichida yozilgan kod "yuqori ustuvorlikka ega" bo‘lmagan deb hisoblanadi, ya’ni: “Shoshilinch emas, avval input tez yangilansin, bu esa keyin bajarilaversin”.
    startTransition(() => {
      // oddiy filterlash items arrayining name xossasi ichida inputning qiymati bo'lsa shu qiymatlardan yangi array yaratadi
      const results = items.filter((item) => item.name.includes(value));
      // tuzilgan arrayni statega saqlash
      setFilteredItems(results);
    });
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {/* loading holati useTransitiondan kelyapdi */}
      {isPending ? (
        <span>Yuklanmoqda...</span>
      ) : (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Search;
