import { useCount } from "../../hooks/use-count";
import { useContext } from "react";
import { useEffect } from "react";

import { Counter } from "../counter/counter";
import { AuthContext } from "../auth-context/auth-context";

export const DishCounter = () => {
  const { count, increment, decrement, reset } = useCount();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      reset();
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return <Counter count={count} increment={increment} decrement={decrement} />;
};
