import { Restaurant } from "../restaurant/restaurant";
import { useSelection } from "./use-selection";

export const RestaurantView = ({ restaurants }) => {
  const { selectedItem, setSelectedItem } = useSelection(restaurants);

  return (
    <>
      <ul>
        {restaurants.map((restaurant) => {
          const { id, name } = restaurant;
          return (
            <li key={id}>
              <button onClick={() => setSelectedItem(restaurant)}>
                {name}
              </button>
            </li>
          );
        })}
      </ul>
      <Restaurant restaurant={selectedItem} />
    </>
  );
};
