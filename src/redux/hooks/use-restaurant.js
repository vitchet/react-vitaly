import { useSelector } from "react-redux";

import { selectRestaurantById } from "@/redux/entities/restaurant/restaurant-slice";

export const useRestaurant = (id) => {
  const { name, menu, reviews } = useSelector((state) =>
    selectRestaurantById(state, id)
  );

  return { name, menu, reviews };
};
