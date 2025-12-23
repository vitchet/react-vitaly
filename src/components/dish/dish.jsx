import styles from "./dish.module.scss";

import { useSelector } from "react-redux";

import { selectDishById } from "@/redux/entities/dish/dish-slice";

import { StyledLink } from "../styled-link/styled-link";

export const Dish = ({ id }) => {
  const { name, price, ingredients } = useSelector((state) =>
    selectDishById(state, id)
  );

  return (
    <div className={styles.dish}>
      <div>
        <p className={styles.title}>
          <b>{name}</b> ${price}
        </p>
        <p className={styles.ingredientList}>{ingredients.join(", ")}</p>
      </div>

      <StyledLink to={`/dish/${id}`} className={styles.buyLink}>
        Buy
      </StyledLink>
    </div>
  );
};
