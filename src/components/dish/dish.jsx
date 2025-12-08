import styles from "./dish.module.scss";

import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ name, price, ingredients }) => {
  return (
    <>
      <p>
        <b>{name}</b> ${price}
        <p>{ingredients.join(", ")}</p>
      </p>
      <p>
        <DishCounter />
      </p>
    </>
  );
};
