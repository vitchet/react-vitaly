import { DishList } from "../dish-list/dish-list";
import { ReviewList } from "../review-list/review-list";
import { Review } from "../review/review";

export const Restaurant = ({ name, dishes, reviews }) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <DishList dishes={dishes} />
      <h3>Reviews</h3>
      <ReviewList reviews={reviews} />
    </>
  );
};
