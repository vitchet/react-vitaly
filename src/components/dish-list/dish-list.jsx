import { Dish } from "../dish/dish";

export const DishList = ({ dishes }) => {
  return (
    <ul>
      {dishes.map(({ id, name, price, ingredients }) => (
        <li key={id}>
          <Dish name={name} price={price} ingredients={ingredients} />
        </li>
      ))}
    </ul>
  );
};
