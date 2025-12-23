import styles from "./restaurant-page.module.scss";

import { Outlet } from "react-router";

import { RestaurantNavBar } from "../restaurant-nav-bar/restaurant-nav-bar";
import { StyledLink } from "../styled-link/styled-link";

export const RestaurantPage = () => {
  return (
    <article className={styles.restaurantPage}>
      <header className={styles.header}>
        <nav>
          <StyledLink to="/">Home</StyledLink>
        </nav>
        <RestaurantNavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </article>
  );
};
