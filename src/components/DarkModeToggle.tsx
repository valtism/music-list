import clsx from "clsx";
import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={clsx(
        "group relative flex items-center justify-center w-12 h-6 rounded-full focus:outline-none",
        "bg-gray-500 dark:bg-gray-700"
      )}
    >
      <div
        className={clsx(
          "absolute left-0 h-6 w-6 rounded-full border-2 group-focus:ring-2",
          "transform transition-transform",
          darkMode ? "translate-x-6" : "translate-x-0",
          "bg-gray-200 group-hover:bg-gray-300 border-gray-500 ring-blue-400",
          "dark:border-gray-700 dark:ring-blue-500"
        )}
      />
      <span className="text-md mt-px">☀️🌛</span>
    </button>
  );
}
