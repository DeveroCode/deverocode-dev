import { useEffect, useState } from "react";


export default function useDarkMode() {
    const [isDark, setIsDark] = useState(
      () =>
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  
    useEffect(() => {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [isDark]);
  
    const toggleDarkMode = () => setIsDark((prev) => !prev);
  
    return { isDark, toggleDarkMode };
  }