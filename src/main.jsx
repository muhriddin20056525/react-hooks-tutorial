import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContaxt.jsx";

createRoot(document.getElementById("root")).render(
  // Butun loyihani ThemeProvider bilan o'rash
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
