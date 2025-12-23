import styles from "./restaurant-view.module.scss";

import { useParams } from "react-router";
import { Outlet } from "react-router";

import { useSelector } from "react-redux";

import { selectRestaurantById } from "@/redux/entities/restaurant/restaurant-slice";
import { StyledNavLink } from "../styled-nav-link/styled-nav-link";

export const RestaurantView = () => {
  const { restaurantId } = useParams();
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <section className={styles.restaurantView}>
      <header>
        <h2 className={styles.title}>{name}</h2>
      </header>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <StyledNavLink to="menu" className={styles.navLink}>
            Menu
          </StyledNavLink>
          <StyledNavLink to="reviews" className={styles.navLink}>
            Reviews
          </StyledNavLink>
        </nav>
        <Outlet />
      </main>
    </section>
  );
};
