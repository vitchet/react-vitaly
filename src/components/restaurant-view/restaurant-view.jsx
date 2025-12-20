import styles from "./restaurant-view.module.scss";

import { useRestaurant } from "@/redux/hooks/use-restaurant";

import { DishList } from "../dish-list/dish-list";
import { ReviewList } from "../review-list/review-list";
import { ReviewForm } from "../review-form/review-form";

export const RestaurantView = ({ id }) => {
  const { name, menu, reviews } = useRestaurant(id);

  return (
    <article className={styles.restaurantView}>
      <header>
        <h2 className={styles.title}>{name}</h2>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <header>
            <h3 className={styles.subTitle}>Menu</h3>
          </header>
          <main>
            <DishList ids={menu} />
          </main>
        </section>
        <section className={styles.section}>
          <header>
            <h3 className={styles.subTitle}>Reviews</h3>
          </header>
          <main>
            <ReviewList ids={reviews} />
            <ReviewForm />
          </main>
        </section>
      </main>
    </article>
  );
};
