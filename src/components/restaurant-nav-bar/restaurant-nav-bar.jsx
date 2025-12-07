import styles from "./restaurant-nav-bar.module.scss";

import { Button, ButtonSize } from "../button/button";

export const RestaurantNavBar = ({ restaurants }) => {
  return (
    <nav>
      <ul className={styles.restaurantNavBar}>
        {restaurants.map((restaurant) => {
          const { id, name } = restaurant;
          return (
            <li className={styles.restaurantNavElement} key={id}>
              <Button
                onClick={() => setSelectedItem(restaurant)}
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
