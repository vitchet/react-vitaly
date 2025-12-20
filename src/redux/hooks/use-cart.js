import { selectItemIds } from "@/redux/entities/cart/cart-slice";
import { useSelector } from "react-redux";

export const useCart = () => {
  const itemIds = useSelector((state) => selectItemIds(state));

  return {
    itemIds,
  };
};
