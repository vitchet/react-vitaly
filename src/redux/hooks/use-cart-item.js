import { useSelector } from "react-redux";

import { selectItemAmountById } from "@/redux/entities/cart/cart-slice";

export const useCartItem = (id) => {
  const amount = useSelector((state) => selectItemAmountById(state, id));

  return { amount: amount };
};
