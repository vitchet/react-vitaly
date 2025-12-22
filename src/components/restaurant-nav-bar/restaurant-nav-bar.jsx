import styles from "./restaurant-nav-bar.module.scss";

import { useSelector } from "react-redux";

import { selectRestaurantIds } from "@/redux/entities/restaurant/restaurant-slice";

import { RestaurantNavLink } from "../restaurant-nav-link/restaurant-nav-link";

export const RestaurantNavBar = () => {
  const ids = useSelector(selectRestaurantIds);

  return (
    <nav>
      <ul className={styles.restaurantNavBar}>
        {ids.map((id) => (
          <li key={id} className={styles.restaurantNavElement}>
            <RestaurantNavLink id={id} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
