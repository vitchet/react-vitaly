import styles from "./restaurant-page.module.scss";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";

import { selectRestaurantIds } from "@/redux/entities/restaurant/restaurant-slice";

import { Outlet } from "react-router";
import { RestaurantNavBar } from "../restaurant-nav-bar/restaurant-nav-bar";
import { StyledLink } from "../styled-link/styled-link";

export const RestaurantPage = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();
  const firstRestaurantId = useSelector(selectRestaurantIds)[0];

  useEffect(() => {
    if (!restaurantId && firstRestaurantId) {
      navigate(`/restaurant/${firstRestaurantId}`, { replace: true });
    }
  }, [restaurantId, firstRestaurantId]);

  return (
    <article className={styles.restaurantPage}>
      <header className={styles.header}>
        <nav>
          <StyledLink to="/">Home</StyledLink>
        </nav>
        <RestaurantNavBar />
      </header>

      <main>
        {firstRestaurantId ? (
          <Outlet />
        ) : (
          <p>
            Sorry, there are no available restaurants at the moment. Please,
            visit us later.
          </p>
        )}
      </main>
    </article>
  );
};
