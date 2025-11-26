import { Dish } from "../dish/dish";
import { Review } from "../review/review";

export const Restaurant = ({ name, dishes, reviews }) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <ul>
        {dishes.map(({ id, name, price, ingredients }) => (
          <li key={id}>
            <Dish name={name} price={price} ingredients={ingredients} />
          </li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ id, user, text, rating }) => (
          <li key={id}>
            <Review user={user} text={text} rating={rating} />
          </li>
        ))}
      </ul>
    </>
  );
};
