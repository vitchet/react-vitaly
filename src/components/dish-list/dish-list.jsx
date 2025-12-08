import styles from "./dish-list.module.scss";

import { Dish } from "../dish/dish";

export const DishList = ({ dishes }) => {
  return dishes?.length > 0 ? (
    <ul className={styles.dishList}>
      {dishes.map(({ id, name, price, ingredients }) => (
        <li className={styles.dishItem} key={id}>
          <Dish name={name} price={price} ingredients={ingredients} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no dishes available.</p>
  );
};
