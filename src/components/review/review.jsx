import { useReview } from "@/hooks/use-review";
import styles from "./review.module.scss";

export const Review = ({ id }) => {
  const { user, text, rating } = useReview(id);
  return (
    <>
      <p>
        <b className={styles.userName}>{user}</b>:{" "}
        <span className={styles.text}>"{text}"</span>
      </p>
      <p> {"⭐".repeat(rating)}</p>
    </>
  );
};
