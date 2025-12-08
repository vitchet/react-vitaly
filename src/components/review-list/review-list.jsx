import { List } from "../list/list";
import { Review } from "../review/review";

export const ReviewList = ({ reviews }) => {
  return reviews?.length > 0 ? (
    <List
      items={reviews}
      itemComponent={(review) => <Review review={review} />}
    />
  ) : (
    <p>There are no reviews yet.</p>
  );
};
