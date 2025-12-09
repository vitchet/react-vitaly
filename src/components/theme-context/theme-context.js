import { createContext } from "react";

export const ThemeType = Object.freeze({
  LIGHT: Symbol("l"),
  DARK: Symbol("d"),
});

export const ThemeContext = createContext({ theme: ThemeType.LIGHT });
