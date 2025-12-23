import styles from "./cart-item.module.scss";

import { useSelector } from "react-redux";

import { selectItemAmountById } from "@/redux/entities/cart/cart-slice";
import { selectDishById } from "@/redux/entities/dish/dish-slice";
import { StyledLink } from "../styled-link/styled-link";

export const CartItem = ({ id }) => {
  const { name } = useSelector((state) => selectDishById(state, id));
  const amount = useSelector((state) => selectItemAmountById(state, id));

  return (
    <div className={styles.cartItem}>
      <p>
        {name}: {amount}
      </p>
      <StyledLink to={`dish/${id}`} className={styles.itemLink}>
        Show
      </StyledLink>
    </div>
  );
};
