export const Counter = ({ count, increment, decrement }) => {
  return (
    <>
      <button onClick={increment}>+</button>
      <span> {count} </span>
      <button onClick={decrement}>-</button>
    </>
  );
};
