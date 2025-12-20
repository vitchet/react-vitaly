import { useCartItem } from "@/redux/hooks/use-cart-item";
import { useDish } from "@/redux/hooks/use-dish";

export const CartItem = (id) => {
  const { name } = useDish(id);
  const { amount } = useCartItem(id);

  return (
    <>
      {name}: {amount}
    </>
  );
};
