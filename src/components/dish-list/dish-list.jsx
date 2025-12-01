import { Dish } from "../dish/dish";

export const DishList = ({ dishes }) => {
  return dishes?.length > 0 ? (
    <ul>
      {dishes.map(({ id, name, price, ingredients }) => (
        <li key={id}>
          <Dish name={name} price={price} ingredients={ingredients} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no dishes available.</p>
  );
};
