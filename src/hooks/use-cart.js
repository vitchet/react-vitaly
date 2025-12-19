import {
  selectItemAmountById,
  selectItemIds,
} from "@/entities/cart/cart-slice";
import { useDispatch, useSelector } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();

  const itemIds = useSelector((state) => selectItemIds(state));

  const addItem = (id) => dispatch(addItem(id));
  const removeItem = (id) => dispatch(removeItem(id));

  return {
    itemIds,
    addItem,
    removeItem,
  };
};
