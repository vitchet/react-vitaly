import { configureStore } from "@reduxjs/toolkit";

import { restaurantSlice } from "./restaurant/restaurant-slice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
  },
});
