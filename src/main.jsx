import { createRoot } from "react-dom/client";

import { restaurants } from "./constants/mock";

createRoot(document.getElementById("root")).render(
  <main>
    { // RESTAURANT
      restaurants.map(rest => (
        <section key={rest.id}>
          <h2>{rest.name}</h2>
          {/* MENU */}
          <h3>Menu</h3>
          <ul>
            { // MENU ITEM (DISH)
              rest.menu.map(dish => (
                <li key={dish.id}>
                  <p><b>{dish.name}</b> ${dish.price}</p>
                  Ingredients:
                  <ol>
                    { // INGREDIENT
                      dish.ingredients.map((ingred, index) => (
                        // need a unique key
                        <li key={dish.id + index}>
                          {ingred}
                        </li>
                      ))
                    }
                  </ol>
                </li>
              ))
            }
          </ul>
          <section>
            {/* REVIEWS */}
            <h3>Reviews</h3>
            <ul>
              { // REVIEW
                rest.reviews.map(review => (
                  <li key={review.id}>
                    <p><b>{review.user}</b> {"⭐".repeat(review.rating)}</p>
                    <p>{review.text}</p>
                  </li>
                ))
              }
            </ul>
          </section>
          <hr></hr>
        </section>
      ))
    }
  </main >
);
