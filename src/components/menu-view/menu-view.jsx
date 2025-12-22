import styles from "./menu-view.module.scss";

import { DishList } from "../dish-list/dish-list";

export const MenuView = ({ ids }) => {
  return (
    <section>
      <header>
        <h3 className={styles.title}>Menu</h3>
      </header>
      <main>
        <DishList ids={ids} />
      </main>
    </section>
  );
};
