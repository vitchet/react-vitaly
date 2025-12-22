import styles from "./restaurant-page.module.scss";

import { useSelector } from "react-redux";

import { useSelection } from "./use-selection";
import { selectRestaurantIds } from "@/redux/entities/restaurant/restaurant-slice";

import { RestaurantView } from "../restaurant-view/restaurant-view";
import { RestaurantNavBar } from "../restaurant-nav-bar/restaurant-nav-bar";
import { Cart } from "../cart/cart";

export const RestaurantPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const {
    selectedItem: shownRestaurantId,
    setSelectedItem: setShownRestaurantId,
  } = useSelection(restaurantIds);

  return (
    <div className={styles.restaurantPage}>
      <RestaurantNavBar
        ids={restaurantIds}
        onClick={(id) => setShownRestaurantId(id)}
      />
      <RestaurantView id={shownRestaurantId} />
      <Cart />
    </div>
  );
};
