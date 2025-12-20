import { configureStore } from "@reduxjs/toolkit";

import { dishSlice } from "./dish/dish-slice";
import { restaurantSlice } from "./restaurant/restaurant-slice";
import { reviewSlice } from "./review/review-slice";
import { userSlice } from "./user/user-slice";
import { cartSlice } from "./cart/cart-slice";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
