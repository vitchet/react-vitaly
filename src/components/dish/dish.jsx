import styles from "./dish.module.scss";

import { useSelector } from "react-redux";

import { selectDishById } from "@/redux/entities/dish/dish-slice";

import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ id }) => {
  const { name, price, ingredients } = useSelector((state) =>
    selectDishById(state, id)
  );
  return (
    <main className={styles.dish}>
      <section>
        <p className={styles.title}>
          <b>{name}</b> ${price}
        </p>
        <p className={styles.ingredientList}>{ingredients.join(", ")}</p>
      </section>
      <section className={styles.counter}>
        <DishCounter id={id} />
      </section>
    </main>
  );
};
