import styles from "./review-form.module.scss";

import { useContext } from "react";
import { useForm } from "./use-form";

import { Button, ButtonSize } from "../button/button";
import { Counter } from "../counter/counter";
import { UserContext } from "../user-context/user-context";

export const ReviewForm = () => {
  const { text, rating, setText, incrementRating, decrementRating, clear } =
    useForm();
  const { user } = useContext(UserContext);

  if (!user) {
    return null;
  }

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <section className={styles.inputPad}>
        <p className={styles.name}>{user.name}</p>
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
