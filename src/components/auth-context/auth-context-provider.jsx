import { useUser } from "./use-auth";

import { AuthContext } from "./auth-context";

export const AuthContextProvider = ({ children }) => {
  const { user, signIn, signOut } = useUser();

  return (
    <AuthContext value={{ user, signIn, signOut }}>{children}</AuthContext>
  );
};
