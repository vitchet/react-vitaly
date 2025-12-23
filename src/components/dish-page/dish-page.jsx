import styles from "./dish-page.module.scss";

import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { selectDishById } from "@/redux/entities/dish/dish-slice";

import { DishCounter } from "../dish-counter/dish-counter";
import { StyledLink } from "../styled-link/styled-link";

export const DishPage = () => {
  const { dishId: id, restaurantId } = useParams();
  const { name, ingredients } = useSelector((state) =>
    selectDishById(state, id)
  );

  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <nav>
          <StyledLink to="/">Home</StyledLink>
        </nav>

        <h2 className={styles.title}>{name}</h2>
      </header>
      <main>
        <h3 className={styles.subTitle}>Ingredients:</h3>
        <ol className={styles.ingredientList}>
          {ingredients.map((ingr) => (
            <li key={ingr}>{ingr}</li>
          ))}
        </ol>
        <br />
        <DishCounter id={id} />
      </main>
    </article>
  );
};
