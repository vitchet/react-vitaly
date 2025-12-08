import styles from "./restaurant-view.module.scss";

import { DishList } from "../dish-list/dish-list";
import { ReviewList } from "../review-list/review-list";
import { ReviewForm } from "../review-form/review-form";

export const RestaurantView = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <article>
      <h2 className={styles.title}>{name}</h2>
      <h3>Menu</h3>
      <DishList dishes={menu} />
      <h3>Reviews</h3>
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </article>
  );
};
