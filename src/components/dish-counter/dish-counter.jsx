import { useContext } from "react";
import { useDishCounter } from "./use-dish-counter";

import { Counter } from "../counter/counter";
import { AuthContext } from "../auth-context/auth-context";

export const DishCounter = ({ id }) => {
  const { count, increment, decrement } = useDishCounter(id);
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return null;
  }

  return <Counter count={count} increment={increment} decrement={decrement} />;
};
