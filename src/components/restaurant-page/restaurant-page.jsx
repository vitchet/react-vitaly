import styles from "./restaurant-page.module.scss";

import { Outlet } from "react-router";

import { RestaurantNavBar } from "../restaurant-nav-bar/restaurant-nav-bar";
import { HomeLink } from "../home-link/home-link";

export const RestaurantPage = () => {
  return (
    <article className={styles.restaurantPage}>
      <header className={styles.header}>
        <HomeLink />
        <RestaurantNavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </article>
  );
};
