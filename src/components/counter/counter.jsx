import { Button } from "../button/button";
import { ButtonSize } from "../button/button";

export const Counter = ({ count, increment, decrement }) => {
  return (
    <>
      <Button type="button" onClick={increment} size={ButtonSize.SMALL}>
        +
      </Button>
      <span> {count} </span>
      <Button type="button" onClick={decrement} size={ButtonSize.SMALL}>
        -
      </Button>
    </>
  );
};
