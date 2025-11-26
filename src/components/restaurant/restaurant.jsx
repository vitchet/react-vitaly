import { Dish } from "../dish/dish";

export const Restaurant = ({ name, dishes }) => {
  return (
    <>
      <h2>{name}</h2>
      <ul>
        {dishes.map(({ id, name, price, ingredients }) => (
          <li>
            <Dish name={name} price={price} ingredients={ingredients} />
          </li>
        ))}
      </ul>
    </>
  );
};
