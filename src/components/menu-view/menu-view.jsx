import styles from "./menu-view.module.scss";

import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { selectRestaurantById } from "@/redux/entities/restaurant/restaurant-slice";

import { DishList } from "../dish-list/dish-list";

export const MenuView = () => {
  const { restaurantId } = useParams();
  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return (
    <section>
      <header>
        <h3 className={styles.title}>Menu</h3>
      </header>
      <main>
        <DishList ids={menu} />
      </main>
    </section>
  );
};
