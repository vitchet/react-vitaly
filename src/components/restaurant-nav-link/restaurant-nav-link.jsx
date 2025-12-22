import styles from "./restaurant-nav-link.module.scss";

import { useSelector } from "react-redux";
import { selectRestaurantById } from "@/redux/entities/restaurant/restaurant-slice";

import { StyledNavLink } from "../styled-nav-link/styled-nav-link";

export const RestaurantNavLink = ({ id }) => {
  const { name } = useSelector((state) => selectRestaurantById(state, id));
  return (
    <StyledNavLink to={`/restaurant/${id}`} className={styles.link}>
      {name}
    </StyledNavLink>
  );
};
