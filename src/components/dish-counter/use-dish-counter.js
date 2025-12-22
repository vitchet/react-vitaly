import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { selectItemAmountById } from "@/redux/entities/cart/cart-slice";
import { addItem, removeItem } from "@/redux/entities/cart/cart-slice";

export const useDishCounter = (id) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectItemAmountById(state, id));

  const increment = () => dispatch(addItem(id));

  const decrement = () => dispatch(removeItem(id));

  return {
    count,
    increment,
    decrement,
  };
};
