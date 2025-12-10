import { useUser } from "./use-user";

import { UserContext } from "./user-context";

export const UserContextProvider = ({ children }) => {
  const { user, signIn, signOut } = useUser();

  return (
    <UserContext value={{ user, signIn, signOut }}>{children}</UserContext>
  );
};
