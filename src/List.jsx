import { useDeferredValue, useEffect, useMemo } from "react";

function List({ input }) {
  // Katta ro'yxat hajmi — 10 000 ta element
  const LIST_SIZE = 10000;

  // `input` qiymatini deferred (kechiktirilgan) versiyasini olamiz
  // Bu, performance uchun foydali, ayniqsa input tez-tez o‘zgarsa
  const deferredInput = useDeferredValue(input);

  // useMemo yordamida `list` faqat `deferredInput` o‘zgarganida qayta hisoblanadi
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      // Har bir elementga `deferredInput` qiymatini chiqaramiz
      l.push(<div key={i}>{deferredInput}</div>);
    }
    // Hosil qilingan massivni qaytaramiz
    return l;
  }, [deferredInput]); // Faqat `deferredInput` o‘zgarsa, qayta hisoblanadi

  // Har safar `input` yoki `deferredInput` o‘zgarganda log chiqaramiz
  useEffect(() => {
    console.log(`Input: ${input}\nDeffered: ${deferredInput}`);
  }, [input, deferredInput]);

  // Tayyorlangan `list`ni div ichida qaytaramiz
  return list;
}

export default List;
