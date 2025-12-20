import { useCart } from "@/redux/hooks/use-cart";

import { CartItem } from "../cart-item/cart-item";
import { List } from "../list/list";

export const Cart = () => {
  const { itemIds: ids } = useCart();

  if (ids.length === 0) {
    return <p>Your cart is empty yet...</p>;
  }

  return (
    <>
      <List ids={ids} component={CartItem}></List>
    </>
  );
};
