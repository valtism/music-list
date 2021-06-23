import { SetStateAction, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { darkAtom } from "../state/appState";

export function useDarkMode(): [
  boolean,
  (update?: SetStateAction<boolean | undefined>) => void
] {
  const [userEnabled, setUserEnabled] = useAtom(darkAtom);
  const prefersDarkMode = usePrefersDarkMode();

  const darkMode = userEnabled === undefined ? prefersDarkMode : userEnabled;

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return [darkMode, setUserEnabled];
}

function usePrefersDarkMode() {
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    const handleChange = ({ matches }: MediaQueryListEvent) => setDark(matches);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleChange);
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", handleChange);
  }, []);
  return dark;
}
