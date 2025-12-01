import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ name, price, ingredients }) => {
  return (
    <>
      <p>
        <b>{name}</b> ${price} <DishCounter />
      </p>
      <p>{ingredients.join(", ")}</p>
    </>
  );
};
