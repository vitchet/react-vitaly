import { useSelector } from "react-redux";

import { selectDishById } from "@/entities/dish/dish-slice";

export const useDish = (id) => {
  const { name, price, ingredients } = useSelector((state) =>
    selectDishById(state, id)
  );

  return { name, price, ingredients };
};
