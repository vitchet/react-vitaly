import styles from "./review-form.module.scss";

import { useForm } from "./use-form";

import { Button, ButtonSize } from "../button/button";
import { Counter } from "../counter/counter";

export const ReviewForm = () => {
  const {
    text,
    userName,
    rating,
    setText,
    setUserName,
    incrementRating,
    decrementRating,
    clear,
  } = useForm();

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <section className={styles.inputPad}>
        <input
          type="text"
          placeholder="Enter your name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className={styles.nameInput}
        />
        <textarea
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.textarea}
        />
      </section>
      <section className={styles.buttonPad}>
        <p>
          <span>Rating: </span>
          <Counter
            count={rating}
            increment={incrementRating}
            decrement={decrementRating}
          />
        </p>
        <Button size={ButtonSize.SMALL} value={text} onClick={clear}>
          CLEAR
        </Button>
      </section>
    </form>
  );
};
