import styles from "./restaurant-page.module.scss";

import { RestaurantNavBar } from "../restaurant-nav-bar/restaurant-nav-bar";
import { Outlet } from "react-router";

export const RestaurantPage = () => {
  return (
    <div className={styles.restaurantPage}>
      <RestaurantNavBar />
      <Outlet />
    </div>
  );
};
