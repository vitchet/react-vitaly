import { useSelector } from "react-redux";

import { useSelection } from "./use-selection";

import { selectRestaurantIds } from "../../entities/restaurant/restaurant-slice";

export const useRestaurantPage = () => {
  const restaurantIds = useSelector((state) => selectRestaurantIds(state));
  const { selectedItem, setSelectedItem } = useSelection(restaurantIds);

  return {
    restaurantIds,
    shownRestaurantId: selectedItem,
    setShownRestaurantId: setSelectedItem,
  };
};
