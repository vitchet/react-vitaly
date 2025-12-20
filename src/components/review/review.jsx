import { useReview } from "@/redux/hooks/use-review";
import styles from "./review.module.scss";
import { userUser } from "@/redux/hooks/use-user";

export const Review = ({ id }) => {
  const { userId, text, rating } = useReview(id);
  const { name: userName } = userUser(userId);
  return (
    <>
      <p>
        <b className={styles.userName}>{userName}</b>:{" "}
        <span className={styles.text}>"{text}"</span>
      </p>
      <p> {"⭐".repeat(rating)}</p>
    </>
  );
};
