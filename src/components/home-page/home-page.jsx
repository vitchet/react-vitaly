import styles from "./home-page.module.scss";

import { use } from "react";
import { useSelector } from "react-redux";

import { selectRestaurantIds } from "@/redux/entities/restaurant/restaurant-slice";

import { AuthContext } from "@/components/auth-context/auth-context";
import { Cart } from "../cart/cart";
import { StyledLink } from "../styled-link/styled-link";

export const HomePage = () => {
  const { auth } = use(AuthContext);
  const firstRestaurantId = useSelector(selectRestaurantIds)[0];

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
          {firstRestaurantId ? (
            <StyledLink
              to={`/restaurant/${firstRestaurantId}`}
              className={styles.restaurantLink}
            >
              Go to restaurants
            </StyledLink>
          ) : (
            <p>
              We're very sorry, there are no restaurants available at the
              moment. Visit this site later, please.
            </p>
          )}
        </section>
        <section>
          <Cart />
        </section>
      </main>
    </article>
  );
};
