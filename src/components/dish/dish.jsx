import styles from "./dish.module.scss";

import { useDish } from "@/hooks/use-dish";

import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ id }) => {
  const { name, price, ingredients } = useDish(id);
  return (
    <main className={styles.dish}>
      <section>
        <p className={styles.title}>
          <b>{name}</b> ${price}
        </p>
        <p className={styles.ingredientList}>{ingredients.join(", ")}</p>
      </section>
      <section className={styles.counter}>
        <DishCounter />
      </section>
    </main>
  );
};
