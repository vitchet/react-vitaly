import { Button } from "../button/button";
import { Restaurant } from "../restaurant/restaurant";

import { useSelection } from "./use-selection";

export const RestaurantView = ({ restaurants }) => {
  const { selectedItem, setSelectedItem } = useSelection(restaurants);

  return (
    <>
      <nav>
        <ul>
          {restaurants.map((restaurant) => {
            const { id, name } = restaurant;
            return (
              <li key={id}>
                <Button onClick={() => setSelectedItem(restaurant)}>
                  {name}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      <Restaurant restaurant={selectedItem} />
    </>
  );
};
