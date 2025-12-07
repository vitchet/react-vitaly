import styles from "./app-layout.module.css";

import classNames from "classnames";

export const AppLayout = ({ children }) => {
  return (
    <div className={classNames(styles.layout, "v-flex", "center")}>
      <header></header>
      <main className={classNames(styles.main, "v-flex", "center")}>
        {children}
      </main>
      <footer></footer>
    </div>
  );
};
