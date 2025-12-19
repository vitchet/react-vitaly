import styles from "./auth-panel.module.scss";

import { useContext } from "react";

import { Button } from "../button/button";
import { AuthContext } from "../auth-context/auth-context";

export const AuthPanel = () => {
  const { user, signIn, signOut } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(e.target.userName.value);
  };

  if (user) {
    return (
      <div className={styles.panel}>
        <p className={styles.name}>{user.name}</p>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit} className={styles.panel}>
        <input
          name="userName"
          type="text"
          placeholder="Enter your name..."
          className={styles.name}
        />
        <Button submit>Sign In</Button>
      </form>
    );
  }
};
