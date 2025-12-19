import { Dish } from "../dish/dish";
import { List } from "../list/list";

export const DishList = ({ ids }) => {
  if (ids.length === 0) {
    return <p>There are no dishes available.</p>;
  }

  return <List ids={ids} component={(id) => <Dish id={id} />} />;
};
