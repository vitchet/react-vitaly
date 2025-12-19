import styles from "./list.module.scss";

export const List = ({ ids, component }) => {
  return (
    <ul className={styles.list}>
      {ids.map((id) => {
        return (
          <li key={id} className={styles.listItem}>
            {component(id)}
          </li>
        );
      })}
    </ul>
  );
};
