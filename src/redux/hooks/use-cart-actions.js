import { useDispatch } from "react-redux";

import {
  addItem as addAction,
  removeItem as removeAction,
} from "../entities/cart/cart-slice";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const addItem = (id) => dispatch(addAction(id));
  const removeItem = (id) => dispatch(removeAction(id));

  return {
    addItem,
    removeItem,
  };
};
