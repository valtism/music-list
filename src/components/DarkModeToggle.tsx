import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode()
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-2 right-2 px-2 py-1 text-2xl rounded-full focus:outline-none focus:ring ring-pink-300"
    >
      {darkMode ? "☀️" : "🌙"}{" "}
    </button>
  );
}
