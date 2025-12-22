import styles from "./review-view.module.scss";

import { ReviewForm } from "../review-form/review-form";
import { ReviewList } from "../review-list/review-list";

export const ReviewView = ({ ids }) => {
  return (
    <section>
      <header>
        <h3 className={styles.title}>Reviews</h3>
      </header>
      <main className={styles.main}>
        <ReviewList ids={ids} />
        <ReviewForm />
      </main>
    </section>
  );
};
