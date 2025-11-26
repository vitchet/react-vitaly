import { Review } from "../review/review";

export const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, user, text, rating }) => (
        <li key={id}>
          <Review user={user} text={text} rating={rating} />
        </li>
      ))}
    </ul>
  );
};
