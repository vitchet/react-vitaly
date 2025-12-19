import { useReview } from "@/hooks/use-review";
import styles from "./review.module.scss";

export const Review = ({ id }) => {
  const { auth, text, rating } = useReview(id);
  return (
    <>
      <p>
        <b className={styles.userName}>{auth}</b>:{" "}
        <span className={styles.text}>"{text}"</span>
      </p>
      <p> {"⭐".repeat(rating)}</p>
    </>
  );
};
