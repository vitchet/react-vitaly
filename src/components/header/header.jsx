import styles from "./header.module.scss";

import { AuthPanel } from "../auth-panel/auth-panel";
import { ThemeToggleButton } from "../theme-toggle-button/theme-toggle-button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <AuthPanel />
      <ThemeToggleButton />
    </header>
  );
};
