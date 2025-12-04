import { useCount } from "../../hooks/use-count";
import { useForm } from "./use-form";

import { Counter } from "../counter/counter";

export const ReviewForm = () => {
  const { text, userName, setText, setUserName, clear: clearForm } = useForm();
  const {
    count: rating,
    increment: incrementRating,
    decrement: decrementRating,
    reset: resetRating,
  } = useCount();

  const clear = () => {
    clearForm();
    resetRating();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <p>
        <input
          type="text"
          placeholder="Enter your name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </p>
      <p>
        <textarea
          placeholder="Right your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
      <p>
        <span>Rating: </span>
        <Counter
          count={rating}
          increment={incrementRating}
          decrement={decrementRating}
        />
      </p>
      <button type="button" value={text} onClick={clear}>
        CLEAR
      </button>
    </form>
  );
};
