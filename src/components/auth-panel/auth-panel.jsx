import { useContext } from "react";

import { UserContext } from "../user-context/user-context";

import { Button } from "../button/button";

export const AuthPanel = () => {
  const { user, signIn, signOut } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(e.target.userName.value);
  };

  if (user) {
    return (
      <>
        <p>{user.name}</p>
        <Button onClick={signOut}>Sign Out</Button>
      </>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input name="userName" type="text" placeholder="Enter your name..." />
        <Button submit>Sign In</Button>
      </form>
    );
  }
};
