import { useCount } from "../../hooks/use-count";
import { Counter } from "../counter/counter";

export const DishCounter = () => {
  const { count, increment, decrement } = useCount();

  return <Counter count={count} increment={increment} decrement={decrement} />;
};
