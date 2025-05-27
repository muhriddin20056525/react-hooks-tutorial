import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContaxt";

function ThemeSwitcher() {
  // ThemeContext nomi bilan yaratilgan contextdan uzatilgan malumotlarni qabul qilib olish
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      {/* Qabul qilingan malumotlardan foydalanish */}
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
