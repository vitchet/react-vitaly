import styles from "./restaurant-page.module.scss";

import { useRestaurantList } from "@/hooks/use-restaurant-list";
import { useSelection } from "./use-selection";

import { RestaurantView } from "../restaurant-view/restaurant-view";
import { RestaurantNavBar } from "../restaurant-nav-bar/restaurant-nav-bar";
import { Cart } from "../cart/cart";

export const RestaurantPage = () => {
  const restaurantIds = useRestaurantList();
  const {
    selectedItem: shownRestaurantId,
    setSelectedItem: setShownRestaurantId,
  } = useSelection(restaurantIds);

  return (
    <div className={styles.restaurantPage}>
      <Cart />
      <RestaurantNavBar
        ids={restaurantIds}
        onClick={(id) => setShownRestaurantId(id)}
      />
      <RestaurantView id={shownRestaurantId} />
    </div>
  );
};
