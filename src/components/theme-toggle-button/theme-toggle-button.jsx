import { useContext } from "react";

import { Button, ButtonSize } from "../button/button";
import { ThemeContext, ThemeType } from "../theme-context/theme-context";

const getIcon = (type) => {
  switch (type) {
    case ThemeType.LIGHT:
      return "☽";
    case ThemeType.DARK:
      return "☀";
    default:
      return "☽";
  }
};

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT);
  };

  return (
    <Button onClick={toggleTheme} size={ButtonSize.LARGE}>
      {getIcon(theme)}
    </Button>
  );
};
