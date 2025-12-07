import styles from "./button.module.scss";

import { fontSize as fs } from "../../common/font-size";

export const Button = ({ children, onClick, fontSize = fs.medium }) => {
  return (
    <button
      className={styles.button}
      style={{ fontSize: fontSize }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
