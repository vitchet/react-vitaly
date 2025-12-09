import { Dish } from "../dish/dish";
import { List } from "../list/list";

export const DishList = ({ dishes }) => {
  return dishes?.length > 0 ? (
    <List items={dishes} itemComponent={(dish) => <Dish dish={dish}></Dish>} />
  ) : (
    <p>There are no dishes available.</p>
  );
};
