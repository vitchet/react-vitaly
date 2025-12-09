import styles from "./restaurant-view.module.scss";

import { DishList } from "../dish-list/dish-list";
import { ReviewList } from "../review-list/review-list";
import { ReviewForm } from "../review-form/review-form";

export const RestaurantView = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

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
            <DishList dishes={menu} />
          </main>
        </section>
        <section className={styles.section}>
          <header>
            <h3 className={styles.subTitle}>Reviews</h3>
          </header>
          <main>
            <ReviewList reviews={reviews} />
            <ReviewForm />
          </main>
        </section>
      </main>
    </article>
  );
};
