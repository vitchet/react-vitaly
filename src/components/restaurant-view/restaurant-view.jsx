import { Restaurant } from "../restaurant/restaurant";
import { useSelection } from "./use-selection";

export const RestaurantView = ({ restaurants }) => {
  const { selectedItem, select } = useSelection(restaurants);

  return (
    <>
      <ul>
        {restaurants.map((restaurant) => {
          const { id, name } = restaurant;
          return (
            <li key={id}>
              <button onClick={() => select(restaurant)}>{name}</button>
            </li>
          );
        })}
      </ul>
      <Restaurant restaurant={selectedItem} />
    </>
  );
};
