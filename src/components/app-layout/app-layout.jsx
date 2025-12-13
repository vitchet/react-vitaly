import styles from "./app-layout.module.scss";

import { Header } from "../header/header";

export const AppLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer></footer>
    </div>
  );
};
