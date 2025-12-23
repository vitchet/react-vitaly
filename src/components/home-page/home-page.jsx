import styles from "./home-page.module.scss";

import { use } from "react";

import { AuthContext } from "@/components/auth-context/auth-context";
import { Cart } from "../cart/cart";
import { StyledLink } from "../styled-link/styled-link";

export const HomePage = () => {
  const { auth } = use(AuthContext);

  let welcomeString = "";
  if (auth) {
    welcomeString = <>Welcome, {auth.userName}!</>;
  } else {
    welcomeString = <>Welcome!</>;
  }

  return (
    <article className={styles.page}>
      <header>
        {" "}
        <h2 className={styles.title}>{welcomeString}</h2>
      </header>
      <main className={styles.main}>
        <section>
          <StyledLink to="/restaurant" className={styles.restaurantLink}>
            Go to restaurants
          </StyledLink>
        </section>
        <section>
          <Cart />
        </section>
      </main>
    </article>
  );
};
