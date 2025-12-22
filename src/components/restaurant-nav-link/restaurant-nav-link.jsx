import { useSelector } from "react-redux";
import { selectRestaurantById } from "@/redux/entities/restaurant/restaurant-slice";

import { Button, ButtonSize } from "../button/button";

export const RestaurantNavLink = ({ id, onClick }) => {
  const { name } = useSelector((state) => selectRestaurantById(state, id));
  return (
    <Button onClick={() => onClick(id)} size={ButtonSize.LARGE} navButton>
      {name}
    </Button>
  );
};
