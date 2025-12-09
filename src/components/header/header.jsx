import styles from "./header.module.scss";

import { ThemeToggleButton } from "../theme-toggle-button/theme-toggle-button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <ThemeToggleButton />
    </header>
  );
};
