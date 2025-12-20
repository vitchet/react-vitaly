import { useSelector } from "react-redux";

import { selectRestaurantIds } from "@/redux/entities/restaurant/restaurant-slice";

export const useRestaurantList = () => {
  const ids = useSelector((state) => selectRestaurantIds(state));
  return ids;
};
