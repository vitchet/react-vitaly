import { useCartActions } from "@/redux/hooks/use-cart-actions";
import { useCartItem } from "@/redux/hooks/use-cart-item";

export const useDishCounter = (id) => {
  const count = useCartItem(id).amount;

  const { addItem, removeItem } = useCartActions();

  const increment = () => addItem(id);

  const decrement = () => removeItem(id);

  return {
    count,
    increment,
    decrement,
  };
};
