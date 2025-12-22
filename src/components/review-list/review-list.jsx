import { List } from "../list/list";
import { Review } from "../review/review";

export const ReviewList = ({ ids }) => {
  if (ids.length === 0) {
    return <p>There are no reviews yet.</p>;
  }

  return <List ids={ids} component={(id) => <Review id={id} />} />;
};
