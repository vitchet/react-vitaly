import { configureStore } from "@reduxjs/toolkit";

import { dishSlice } from "./dish/dish-slice";
import { restaurantSlice } from "./restaurant/restaurant-slice";

export const store = configureStore({
  reducer: {
    [dishSlice.name]: dishSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
  },
});
