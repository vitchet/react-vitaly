import { useDispatch } from "react-redux";

import {
  addItem as addAction,
  removeItem as removeAction,
  clear as clearAction,
} from "../entities/cart/cart-slice";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const addItem = (id) => dispatch(addAction(id));
  const removeItem = (id) => dispatch(removeAction(id));
  const clear = () => dispatch(clearAction());

  return {
    addItem,
    removeItem,
    clear,
  };
};
