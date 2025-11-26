import { Restaurant } from "../restaurant/restaurant";

export const RestaurantView = ({ restaurants }) => {
  return (
    <ul>
      {restaurants.map(({ id, name, menu }) => (
        <li key={id}>
          <Restaurant name={name} dishes={menu} />
        </li>
      ))}
    </ul>
  );
};
