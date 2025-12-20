import { useCartItem } from "@/hooks/use-cart-item";
import { useDish } from "@/hooks/use-dish";

export const CartItem = (id) => {
  const { name } = useDish(id);
  const { amount } = useCartItem(id);

  return (
    <>
      {name}: {amount}
    </>
  );
};
