import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./entities/cart/cart-slice";
import { dishSlice } from "./entities/dish/dish-slice";
import { restaurantSlice } from "./entities/restaurant/restaurant-slice";
import { reviewSlice } from "./entities/review/review-slice";
import { userSlice } from "./entities/user/user-slice";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
