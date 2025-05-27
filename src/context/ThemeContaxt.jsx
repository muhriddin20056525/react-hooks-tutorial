import { createContext, useEffect, useState } from "react";

// context yaratish
export const ThemeContext = createContext();

// context bilan provider yasash shu provider ichidagi barcha komponent yoki sahifalarga malumot uzatish mumkin bo'ladi
export const ThemeProvider = ({ children }) => {
  // Temani o'zgaratirish uchun state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Temani o'zgartiradigan funksiya
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    // html elementiga `data-theme` atributini qo'shib sahifani dark yoki light modeda bo'lishini belgilash
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark"
    );
  }, [isDarkMode]);

  return (
    // funksiya va stateni ThemeProvider o'rab tugan barcha component va sahifalarga jo'natish
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
