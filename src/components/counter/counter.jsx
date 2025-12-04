export const Counter = ({ count, increment, decrement }) => {
  return (
    <>
      <button type="button" onClick={increment}>
        +
      </button>
      <span> {count} </span>
      <button type="button" onClick={decrement}>
        -
      </button>
    </>
  );
};
