import { useReducer } from "react";

import User from "../../classes/User";

const Action = Object.freeze({
  SIGN_IN: Symbol("si"),
  SIGN_OUT: Symbol("so"),
});

const reducer = (state, { type, payload }) => {
  switch (type) {
    case Action.SIGN_IN: {
      return new User(payload);
    }
    case Action.SIGN_OUT:
      return null;
    default:
      return null;
  }
};

export const useUser = () => {
  const [user, dispatch] = useReducer(reducer, null);

  const signIn = (userName) => {
    dispatch({ type: Action.SIGN_IN, payload: userName });
  };

  const signOut = () => {
    dispatch({ type: Action.SIGN_OUT });
  };

  return {
    user,
    signIn,
    signOut,
  };
};
