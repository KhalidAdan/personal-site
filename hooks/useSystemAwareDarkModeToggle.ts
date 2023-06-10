import { useState } from "react";
import useMediaQuery from "./useMediaQuery";

const useSystemAwareDarkModeToggle = (): ["light" | "dark", () => void] => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(
    prefersDarkMode ? "dark" : "light"
  );

  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === "light" ? "dark" : "light";
    setColorScheme(newColorScheme);
    document.documentElement.classList.remove(colorScheme);
    document.documentElement.classList.add(newColorScheme);
  };

  return [colorScheme, toggleColorScheme];
};

export default useSystemAwareDarkModeToggle;
