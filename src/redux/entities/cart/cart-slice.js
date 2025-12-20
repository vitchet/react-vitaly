import { createSelector, createSlice } from "@reduxjs/toolkit";

import Cart from "@/classes/Cart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: new Cart(),
  reducers: {
    addItem: (state, action) => {
      const { payload: id } = action;
      state.addItem(id);
    },
    removeItem: (state, action) => {
      const { payload: id } = action;
      state.removeItem(id);
    },
    clear: (state) => {
      state.clear();
    },
  },
  selectors: {
    selectState: (state) => state,
    selectItemAmountById: (state, id) => state.getAmount(id),
  },
});

export const selectItemIds = createSelector(
  cartSlice.selectors.selectState,
  (state) => state.getItemIds()
);

export const { addItem, removeItem, clear } = cartSlice.actions;
export const { selectItemAmountById } = cartSlice.selectors;
