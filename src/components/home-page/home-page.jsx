import styles from "./home-page.module.scss";

import { use } from "react";
import { useSelector } from "react-redux";

import { selectRestaurantIds } from "@/redux/entities/restaurant/restaurant-slice";

import { AuthContext } from "@/components/auth-context/auth-context";
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
    <>
      <h2>{welcomeString}</h2>
      {firstRestaurantId ? (
        <StyledLink
          to={`/restaurant/${firstRestaurantId}`}
          className={styles.restaurantLink}
        >
          Go to restaurants
        </StyledLink>
      ) : (
        <p>
          We're very sorry, there are no restaurants available at the moment.
          Visit this site later, please.
        </p>
      )}
    </>
  );
};
