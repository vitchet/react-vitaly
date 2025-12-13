import { Button } from "../button/button";
import { ButtonSize } from "../button/button";

export const Counter = ({ count, increment, decrement }) => {
  return (
    <>
      <Button onClick={increment} size={ButtonSize.SMALL}>
        +
      </Button>
      <span> {count} </span>
      <Button onClick={decrement} size={ButtonSize.SMALL}>
        -
      </Button>
    </>
  );
};
