import { Button } from "../button/button";

import { fontSize } from "../../common/font-size";

export const Counter = ({ count, increment, decrement }) => {
  return (
    <>
      <Button type="button" onClick={increment} fontSize={fontSize.large}>
        +
      </Button>
      <span> {count} </span>
      <Button type="button" onClick={decrement} fontSize={fontSize.small}>
        -
      </Button>
    </>
  );
};
