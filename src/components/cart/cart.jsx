import styles from "./cart.module.scss";

import { useContext } from "react";

import { useSelector } from "react-redux";
import { selectItemIds } from "@/redux/entities/cart/cart-slice";

import { CartItem } from "../cart-item/cart-item";
import { List } from "../list/list";

import { AuthContext } from "../auth-context/auth-context";

export const Cart = () => {
  const ids = useSelector(selectItemIds);
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return null;
  }

  return (
    <section>
      <header>
        <h3 className={styles.title}>Cart</h3>
      </header>
      <main>
        {ids.length ? (
          <List ids={ids} component={(id) => <CartItem id={id} />}></List>
        ) : (
          <p>Your cart is empty yet...</p>
        )}
      </main>
    </section>
  );
};
