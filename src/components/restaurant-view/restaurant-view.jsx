import { Restaurant } from "../restaurant/restaurant";

export const RestaurantView = ({ restaurants }) => {
  return (
    <ul>
      {restaurants.map(({ id, name, menu, reviews }) => (
        <li key={id}>
          <Restaurant name={name} dishes={menu} reviews={reviews} />
        </li>
      ))}
    </ul>
  );
};
