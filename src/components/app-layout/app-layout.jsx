import styles from "./app-layout.module.scss";

import { Outlet } from "react-router";

import { Header } from "../header/header";

export const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};
