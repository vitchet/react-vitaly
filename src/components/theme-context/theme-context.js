import { createContext } from "react";

export const ThemeType = Object.freeze({
  LIGHT: Symbol("light"),
  DARK: Symbol("dark"),
});

export const ThemeContext = createContext({});
