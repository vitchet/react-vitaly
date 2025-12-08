import styles from "./list.module.scss";

export const List = ({ items, itemComponent }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        const key = item.id;
        if (key === undefined) {
          console.warn(
            'List items should contain "id" field to be used as a key.'
          );
        }
        return (
          <li key={key} className={styles.listItem}>
            {itemComponent(item)}
          </li>
        );
      })}
    </ul>
  );
};
