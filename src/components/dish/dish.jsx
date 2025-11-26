import { Ingredient } from "../ingredient/ingredient";

export const Dish = ({ name, price, ingredients }) => {
  return (
    <>
      <p>
        <b>{name}</b> ${price}
      </p>
      <p>{ingredients.join(", ")}</p>
    </>
  );
};
