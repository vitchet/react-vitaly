import { useReducer } from "react";

import Auth from "../../classes/Auth";

import { useCartActions } from "@/redux/hooks/use-cart-actions";

const Action = Object.freeze({
  SIGN_IN: Symbol("si"),
  SIGN_OUT: Symbol("so"),
});

const reducer = (state, { type, payload }) => {
  switch (type) {
    case Action.SIGN_IN: {
      return new Auth(payload);
    }
    case Action.SIGN_OUT:
      return null;
    default:
      return null;
  }
};

export const useAuth = () => {
  const [auth, dispatch] = useReducer(reducer, null);
  const { clear: clearCart } = useCartActions();

  const signIn = (userName) => {
    if (userName?.length) {
      dispatch({ type: Action.SIGN_IN, payload: userName });
    }
  };

  const signOut = () => {
    dispatch({ type: Action.SIGN_OUT });
    clearCart();
  };

  return {
    auth,
    signIn,
    signOut,
  };
};
