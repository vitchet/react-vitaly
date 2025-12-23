import styles from "./review-page.module.scss";

import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { selectReviewById } from "@/redux/entities/review/review-slice";
import { selectUserById } from "@/redux/entities/user/user-slice";

import { StyledLink } from "../styled-link/styled-link";

export const ReviewPage = () => {
  const { reviewId } = useParams();
  const { userId, text, rating } = useSelector((state) =>
    selectReviewById(state, reviewId)
  );
  const { name: author } = useSelector((state) =>
    selectUserById(state, userId)
  );

  return (
    <article>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
        </nav>
      </header>
      <main className={styles.main}>
        <h3 className={styles.author}>{author}</h3>
        <p className={styles.text}>"{text}"</p>
        <p className={styles.rating}>Rating: {"⭐".repeat(rating)}</p>
      </main>
    </article>
  );
};
