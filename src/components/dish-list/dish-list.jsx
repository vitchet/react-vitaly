import styles from "./dish-list.module.scss";

import { Dish } from "../dish/dish";
import { List } from "../list/list";

export const DishList = ({ dishes }) => {
  return dishes?.length > 0 ? (
    <List
      items={dishes}
      itemComponent={(dish) => <Dish dish={dish}></Dish>}
    ></List>
  ) : (
    <p>There are no dishes available.</p>
  );
};
