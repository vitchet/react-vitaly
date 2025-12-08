import { RestaurantView } from "../restaurant-view/restaurant-view";
import { RestaurantNavBar } from "../restaurant-nav-bar/restaurant-nav-bar";

import { useSelection } from "./use-selection";

export const RestaurantPage = ({ restaurants }) => {
  const { selectedItem, setSelectedItem } = useSelection(restaurants);

  return (
    <>
      <RestaurantNavBar
        restaurants={restaurants}
        onSelect={(restaurant) => setSelectedItem(restaurant)}
      />
      <RestaurantView restaurant={selectedItem} />
    </>
  );
};
