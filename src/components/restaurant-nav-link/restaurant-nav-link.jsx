import { useRestaurant } from "@/redux/hooks/use-restaurant";

import { Button, ButtonSize } from "../button/button";

export const RestaurantNavLink = ({ id, onClick }) => {
  const { name } = useRestaurant(id);
  return (
    <Button onClick={() => onClick(id)} size={ButtonSize.LARGE} navButton>
      {name}
    </Button>
  );
};
