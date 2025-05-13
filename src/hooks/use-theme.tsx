
import * as React from "react";

type Theme = "dark" | "light" | "system";

export function useTheme() {
  const [theme, setThemeState] = React.useState<Theme>(
    () => (localStorage.getItem("ui-theme") as Theme) || "system"
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const setTheme = React.useCallback((theme: Theme) => {
    localStorage.setItem("ui-theme", theme);
    setThemeState(theme);
  }, []);

  return { theme, setTheme };
}
