import styles from "./dish.module.scss";

import { use } from "react";
import { useSelector } from "react-redux";

import { selectDishById } from "@/redux/entities/dish/dish-slice";

import { AuthContext } from "../auth-context/auth-context";
import { StyledLink } from "../styled-link/styled-link";

export const Dish = ({ id }) => {
  const { name, price, ingredients } = useSelector((state) =>
    selectDishById(state, id)
  );
  const { auth } = use(AuthContext);

  return (
    <div className={styles.dish}>
      <div>
        <p className={styles.title}>
          <b>{name}</b> ${price}
        </p>
        <p className={styles.ingredientList}>{ingredients.join(", ")}</p>
      </div>
      {auth && (
        <StyledLink to={`/dish/${id}`} className={styles.buyLink}>
          Buy
        </StyledLink>
      )}
    </div>
  );
};
