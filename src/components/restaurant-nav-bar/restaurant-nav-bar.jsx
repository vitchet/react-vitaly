import styles from "./restaurant-nav-bar.module.scss";

import { Button, ButtonSize } from "../button/button";

export const RestaurantNavBar = ({ restaurants, onSelect }) => {
  return (
    <nav>
      <ul className={styles.restaurantNavBar}>
        {restaurants.map((restaurant) => {
          const { id, name } = restaurant;
          return (
            <li className={styles.restaurantNavElement} key={id}>
              <Button
                onClick={() => onSelect(restaurant)}
                size={ButtonSize.LARGE}
                navButton
              >
                {name}
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
