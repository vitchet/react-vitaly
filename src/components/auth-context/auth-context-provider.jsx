import { useAuth } from "./use-auth";

import { AuthContext } from "./auth-context";

export const AuthContextProvider = ({ children }) => {
  const { auth, signIn, signOut } = useAuth();

  return (
    <AuthContext value={{ auth, signIn, signOut }}>{children}</AuthContext>
  );
};
