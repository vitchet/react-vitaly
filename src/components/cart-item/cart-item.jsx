import { useSelector } from "react-redux";

import { selectItemAmountById } from "@/redux/entities/cart/cart-slice";
import { selectDishById } from "@/redux/entities/dish/dish-slice";

export const CartItem = ({ id }) => {
  const { name } = useSelector((state) => selectDishById(state, id));
  const amount = useSelector((state) => selectItemAmountById(state, id));

  return (
    <>
      {name}: {amount}
    </>
  );
};
