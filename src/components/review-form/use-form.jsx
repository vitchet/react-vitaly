import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  userName: "",
  text: "",
};

const Action = Object.freeze({
  SET_TEXT: Symbol("st"),
  SET_USER_NAME: Symbol("sun"),
  CLEAR: Symbol("c"),
});

const reducer = (state, { type, payload }) => {
  switch (type) {
    case Action.SET_TEXT:
      return { ...state, text: payload };
    case Action.SET_USER_NAME:
      return { ...state, userName: payload };
    case Action.CLEAR:
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
};

export const useForm = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setText = (text) => dispatch({ type: Action.SET_TEXT, payload: text });

  const setUserName = (userName) =>
    dispatch({ type: Action.SET_USER_NAME, payload: userName });

  const clear = () => dispatch({ type: Action.CLEAR });

  return {
    text: state.text,
    userName: state.userName,
    setText,
    setUserName,
    clear,
  };
};
