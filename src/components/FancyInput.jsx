import React, {
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
} from "react";

// forward ref orqali ora elementdan keladigan ref qabul qilinadi yani (useRef)
const FancyInput = forwardRef((_, ref) => {
  const [inputValue, setInputValue] = useState("");
  // shu componentdagi inputga bog'langan ref
  const inputRef = useRef(null);

  // useImperativeHandle ota componentdan kelgan refni qiymat qilib oladi va uning ichida yozilgan funksiyalarni shu ref orqali ota elementga yuboradi
  useImperativeHandle(ref, () => ({
    // Inputni focus qiladigan funksiya
    focus: () => {
      inputRef.current.focus();
    },

    // Inputni tozalaydigan funksiya
    clear: () => {
      inputRef.current.value = "";
      setInputValue("");
    },

    // Salom beradigan funksiya
    sayHello: () => {
      console.log("Hello");
    },
  }));

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // shu component refini inputga bog'lash
        ref={inputRef}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
});

export default FancyInput;
