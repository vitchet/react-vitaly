import styles from "./app-layout.module.scss";

import { Header } from "../header/header";
import { ThemeContext, ThemeType } from "../theme-context/theme-context";

export const AppLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ThemeContext value={{ theme: ThemeType.LIGHT }}>
        <Header />
        <main className={styles.main}>{children}</main>
        <footer></footer>
      </ThemeContext>
    </div>
  );
};
