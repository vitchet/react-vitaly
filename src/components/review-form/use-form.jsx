import { useReducer } from "react";

import { useCount } from "../../hooks/use-count";

const DEFAULT_FORM_VALUE = {
  userName: "",
  text: "",
};

const getAllDefaultValues = (...additionalValues) => ({
  ...DEFAULT_FORM_VALUE,
  ...additionalValues,
});

const Action = Object.freeze({
  SET_TEXT: Symbol("st"),
  SET_USER_NAME: Symbol("sun"),
  INCREMENT_RATING: Symbol("ir"),
  DECREMENT_RATING: Symbol("dr"),
  CLEAR: Symbol("c"),
});

const reducer = (state, { type, payload }) => {
  switch (type) {
    case Action.SET_TEXT:
      return { ...state, text: payload };
    case Action.SET_USER_NAME:
      return { ...state, userName: payload };
    case Action.INCREMENT_RATING: {
      payload.increment();
      return state;
    }
    case Action.DECREMENT_RATING: {
      payload.decrement();
      return state;
    }
    case Action.CLEAR: {
      payload.reset();
      return DEFAULT_FORM_VALUE;
    }
    default:
      return state;
  }
};

export const useForm = () => {
  const counter = useCount();
  const [formState, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setText = (text) => {
    dispatch({ type: Action.SET_TEXT, payload: text });
  };

  const setUserName = (userName) => {
    dispatch({ type: Action.SET_USER_NAME, payload: userName });
  };
  const incrementRating = () => {
    dispatch({ type: Action.INCREMENT_RATING, payload: counter });
  };

  const decrementRating = () => {
    dispatch({ type: Action.DECREMENT_RATING, payload: counter });
  };

  const clear = () => {
    dispatch({ type: Action.CLEAR, payload: counter });
  };

  return {
    text: formState.text,
    userName: formState.userName,
    rating: counter.count,
    setText,
    setUserName,
    incrementRating,
    decrementRating,
    clear,
  };
};
