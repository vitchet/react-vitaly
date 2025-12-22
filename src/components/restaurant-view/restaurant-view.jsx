import styles from "./restaurant-view.module.scss";

import { useSelector } from "react-redux";

import { selectRestaurantById } from "@/redux/entities/restaurant/restaurant-slice";

import { useParams } from "react-router";
import { ReviewView } from "../review-view/review-view";
import { MenuView } from "../menu-view/menu-view";

export const RestaurantView = () => {
  const { restaurantId } = useParams();
  const { name, menu, reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <article className={styles.restaurantView}>
      <header>
        <h2 className={styles.title}>{name}</h2>
      </header>
      <main className={styles.main}>
        <MenuView ids={menu} />
        <ReviewView ids={reviews} />
      </main>
    </article>
  );
};
