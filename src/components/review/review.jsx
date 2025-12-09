import styles from "./review.module.scss";

export const Review = ({ review }) => {
  const { user, text, rating } = review;
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
