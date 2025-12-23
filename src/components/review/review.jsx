import styles from "./review.module.scss";

import { useSelector } from "react-redux";
import { selectReviewById } from "@/redux/entities/review/review-slice";
import { selectUserById } from "@/redux/entities/user/user-slice";
import { StyledLink } from "../styled-link/styled-link";

export const Review = ({ id }) => {
  const { userId, text, rating } = useSelector((state) =>
    selectReviewById(state, id)
  );
  const { name: userName } = useSelector((state) =>
    selectUserById(state, userId)
  );
  return (
    <div className={styles.review}>
      <div>
        <p>
          <b className={styles.userName}>{userName}</b>:{" "}
          <span className={styles.text}>"{text}"</span>
        </p>
        <p> {"⭐".repeat(rating)}</p>
      </div>
      <StyledLink to={`/review/${id}`} className={styles.showLink}>
        Show
      </StyledLink>
    </div>
  );
};
