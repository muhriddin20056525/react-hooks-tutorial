import { useReducer } from "react";

// Reducerning boshlang'ich qiymati
const initialState = 0;

// Reducer uchun funksiya yaratish
function countReducer(state, action) {
  // action.type funksiya qayerda chaqirilsa o'sha yerdan parametr sifatida berib yuboriladi
  switch (action.type) {
    case "INCREMENT":
      // state da reducerning boshlang'ich qiymatlari saqlanadi
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      break;
  }
}

function Counter() {
  // useReducer hookini chaqirish va unga funksiya va boshlang'ich qiymatni argument sifatida berish
  // count — hozirgi holat (state), ya'ni useReducer qaytargan qiymat (masalan, sanagichning qiymati).
  // dispatch — action yuboruvchi funksiya, ya'ni reducerga signal berish uchun ishlatiladi (dispatch({ type: 'increment' }) kabi).
  const [count, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* dispatch orqali actionga type yuborish */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default Counter;
