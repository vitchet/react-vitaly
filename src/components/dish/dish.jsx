import styles from "./dish.module.scss";

import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish;
  return (
    <>
      <section>
        <b>{name}</b> ${price}
        <p>{ingredients.join(", ")}</p>
      </section>
      <p>
        <DishCounter />
      </p>
    </>
  );
};
