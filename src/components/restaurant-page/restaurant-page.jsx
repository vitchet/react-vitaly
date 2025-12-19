import styles from "./restaurant-page.module.scss";

import { useRestaurantPage } from "./use-restaurant-page";

import { RestaurantView } from "../restaurant-view/restaurant-view";
import { RestaurantNavBar } from "../restaurant-nav-bar/restaurant-nav-bar";

export const RestaurantPage = () => {
  const { restaurantIds, shownRestaurantId, setShownRestaurantId } =
    useRestaurantPage();

  return (
    <div className={styles.restaurantPage}>
      <RestaurantNavBar
        ids={restaurantIds}
        onClick={(id) => setShownRestaurantId(id)}
      />
      <RestaurantView id={shownRestaurantId} />
    </div>
  );
};
