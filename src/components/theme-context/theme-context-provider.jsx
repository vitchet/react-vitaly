import { useEffect, useState } from "react";

import { ThemeContext, ThemeType } from "./theme-context";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(ThemeType.LIGHT);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme.description);
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
