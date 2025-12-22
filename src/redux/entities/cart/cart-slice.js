import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addItem: (state, action) => {
      const { payload: id } = action;
      state[id] = (state[id] || 0) + 1;
    },
    removeItem: (state, action) => {
      const { payload: id } = action;
      if (!state[id]) {
        return;
      }

      state[id] = state[id] - 1;
      if (state[id] <= 0) {
        delete state[id];
      }
    },
    clear: () => {
      return {};
    },
  },
  selectors: {
    selectState: (state) => state,
    selectItemAmountById: (state, id) => state[id] || 0,
  },
});

export const selectItemIds = createSelector(
  cartSlice.selectors.selectState,
  (state) => Object.keys(state)
);

export const { addItem, removeItem, clear } = cartSlice.actions;
export const { selectItemAmountById } = cartSlice.selectors;
