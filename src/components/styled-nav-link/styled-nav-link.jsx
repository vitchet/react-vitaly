import styles from "./styled-nav-link.module.scss";

import classNames from "classnames";

import { NavLink } from "react-router";

export const StyledNavLink = ({ to, children, className }) => {
  return (
    <NavLink to={to} className={classNames(styles.navLink, className)}>
      {children}
    </NavLink>
  );
};
