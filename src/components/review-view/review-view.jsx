import styles from "./review-view.module.scss";

import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { selectRestaurantById } from "@/redux/entities/restaurant/restaurant-slice";

import { ReviewForm } from "../review-form/review-form";
import { ReviewList } from "../review-list/review-list";

export const ReviewView = () => {
  const { restaurantId } = useParams();
  const { reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <section>
      <header>
        <h3 className={styles.title}>Reviews</h3>
      </header>
      <main className={styles.main}>
        <ReviewList ids={reviews} />
        <ReviewForm />
      </main>
    </section>
  );
};
