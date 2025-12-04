import { useReducer } from "react";

const correctInitialValues = (initial, min, max) => {
  const safeMin = Math.min(min, max);
  const safeMax = Math.max(min, max);
  const safeInitial = Math.max(safeMin, Math.min(initial, safeMax));

  if (safeMin != min || safeMax != max || safeInitial != initial) {
    console.warn('Incorrect arguments for "useCount"');
  }

  return [safeMin, safeMax, safeInitial];
};

const Action = Object.freeze({
  INCREMENT: Symbol("i"),
  DECREMENT: Symbol("d"),
  RESET: Symbol("r"),
});

const reducer = (state, { type, payload }) => {
  switch (type) {
    case Action.INCREMENT:
      return { count: Math.min(state.count + 1, payload) };
    case Action.DECREMENT:
      return { count: Math.max(state.count - 1, payload) };
    case Action.RESET:
      return { count: payload };
    default:
      return state;
  }
};

export const useCount = (initial = 0, min = 0, max = 5) => {
  const [safeMin, safeMax, safeInitial] = correctInitialValues(
    initial,
    min,
    max
  );
  const [state, dispatch] = useReducer(reducer, { count: safeInitial });

  const increment = () => {
    dispatch({ type: Action.INCREMENT, payload: safeMax });
  };

  const decrement = () => {
    dispatch({ type: Action.DECREMENT, payload: safeMin });
  };

  const reset = () => {
    dispatch({ type: Action.RESET, payload: safeInitial });
  };

  return {
    count: state.count,
    increment,
    decrement,
    reset,
  };
};
