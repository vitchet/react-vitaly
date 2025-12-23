import styles from "./dish-page.module.scss";

import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { selectDishById } from "@/redux/entities/dish/dish-slice";

import { HomeLink } from "../home-link/home-link";

export const DishPage = () => {
  const { dishId: id } = useParams();
  const { name, ingredients } = useSelector((state) =>
    selectDishById(state, id)
  );

  return (
    <article>
      <header>
        <HomeLink />
        <h2>{name}</h2>
      </header>
      <main>
        <h3>Ingredients:</h3>
        <ol>
          {ingredients.map((ingr) => (
            <li key={ingr}>{ingr}</li>
          ))}
        </ol>
      </main>
    </article>
  );
};
