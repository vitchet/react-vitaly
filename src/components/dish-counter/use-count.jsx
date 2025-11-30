import { useState } from "react";

export const useCount = (initial = 0, min = 0, max = 5) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return {
    count,
    increment,
    decrement,
  };
};
