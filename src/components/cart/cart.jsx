import { useContext } from "react";

import { useCart } from "@/redux/hooks/use-cart";

import { CartItem } from "../cart-item/cart-item";
import { List } from "../list/list";

import { AuthContext } from "../auth-context/auth-context";

export const Cart = () => {
  const { itemIds: ids } = useCart();
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return null;
  }

  if (ids.length === 0) {
    return <p>Your cart is empty yet...</p>;
  }

  return (
    <>
      <List ids={ids} component={(id) => <CartItem id={id} />}></List>
    </>
  );
};
