import styles from "./restaurant-nav-bar.module.scss";

import { RestaurantNavLink } from "../restaurant-nav-link/restaurant-nav-link";

export const RestaurantNavBar = ({ ids, onClick }) => {
  return (
    <nav>
      <ul className={styles.restaurantNavBar}>
        {ids.map((id) => (
          <li key={id} className={styles.restaurantNavElement}>
            <RestaurantNavLink id={id} onClick={onClick} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
