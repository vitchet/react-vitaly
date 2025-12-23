import styles from "./styled-link.module.scss";

import classNames from "classnames";

import { Link } from "react-router";

export const StyledLink = ({ to, children, className }) => {
  return (
    <Link to={to} className={classNames(styles.link, className)}>
      {children}
    </Link>
  );
};
