import { useRef } from "react";
import FancyInput from "./components/FancyInput";

function App() {
  // child componentdan funksiyalarni chqirish uchun ref ochish
  const fancyInputRef = useRef();

  return (
    <div>
      {/* ref ni child componentga yuborish */}
      <FancyInput ref={fancyInputRef} />

      {/* child componentdan kelgan funsiyalardan foydalanish */}
      <button onClick={() => fancyInputRef.current.focus()}>Focus</button>
      <button onClick={() => fancyInputRef.current.clear()}>Clear</button>
      <button onClick={() => fancyInputRef.current.sayHello()}>Hello</button>
    </div>
  );
}

export default App;
