import styles from "./button.module.scss";

import classnames from "classnames";

export const ButtonSize = Object.freeze({
  SMALL: Symbol("s"),
  MEDIUM: Symbol("m"),
  LARGE: Symbol("l"),
});

const DEFAULT_SIZE = ButtonSize.MEDIUM;

const getSizeClass = (size) => {
  switch (size) {
    case ButtonSize.SMALL:
      return styles.sizeSmall;
    case ButtonSize.MEDIUM:
      return styles.sizeMedium;
    case ButtonSize.LARGE:
      return styles.sizeLarge;
    default:
      return DEFAULT_SIZE;
  }
};

export const Button = ({ children, onClick, size = DEFAULT_SIZE }) => {
  return (
    <button
      className={classnames(styles.button, getSizeClass(size))}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
