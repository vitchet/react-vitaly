import styles from "./app-layout.module.scss";

export const AppLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header></header>
      <main className={styles.main}>{children}</main>
      <footer></footer>
    </div>
  );
};
