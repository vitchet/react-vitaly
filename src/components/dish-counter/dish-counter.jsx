import { useCount } from "../../hooks/use-count";

export const DishCounter = () => {
  const { count, increment, decrement } = useCount();

  return (
    <>
      <button onClick={increment}>+</button>
      <span> {count} </span>
      <button onClick={decrement}>-</button>
    </>
  );
};
