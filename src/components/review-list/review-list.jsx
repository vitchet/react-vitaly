import { Review } from "../review/review";

export const ReviewList = ({ reviews }) => {
  return reviews?.length > 0 ? (
    <ul>
      {reviews.map(({ id, user, text, rating }) => (
        <li key={id}>
          <Review user={user} text={text} rating={rating} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no reviews yet.</p>
  );
};
