import styles from "./dish.module.scss";

import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish;
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
