import styles from "./review.module.scss";

import { useSelector } from "react-redux";
import { selectReviewById } from "@/redux/entities/review/review-slice";
import { selectUserById } from "@/redux/entities/user/user-slice";

export const Review = ({ id }) => {
  const { userId, text, rating } = useSelector((state) =>
    selectReviewById(state, id)
  );
  const { name: userName } = useSelector((state) =>
    selectUserById(state, userId)
  );
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
