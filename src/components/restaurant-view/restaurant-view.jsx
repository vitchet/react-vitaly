import { Restaurant } from "../restaurant/restaurant";
import { RestaurantNavBar } from "../restaurant-nav-bar/restaurant-nav-bar";

import { useSelection } from "./use-selection";

export const RestaurantView = ({ restaurants }) => {
  const { selectedItem, setSelectedItem } = useSelection(restaurants);

  return (
    <>
      <RestaurantNavBar
        restaurants={restaurants}
        onSelect={(restaurant) => setSelectedItem(restaurant)}
      />
      <Restaurant restaurant={selectedItem} />
    </>
  );
};
