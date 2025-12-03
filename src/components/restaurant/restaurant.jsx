import { DishList } from "../dish-list/dish-list";
import { ReviewList } from "../review-list/review-list";
import { ReviewForm } from "../review-form/review-form";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <DishList dishes={menu} />
      <h3>Reviews</h3>
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </>
  );
};
