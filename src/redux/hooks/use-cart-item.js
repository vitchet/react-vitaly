import { selectItemAmountById } from "@/redux/entities/cart/cart-slice";
import { useSelector } from "react-redux";

export const useCartItem = (id) => {
  const { amount } = useSelector(selectItemAmountById(id));

  return { amount };
};
