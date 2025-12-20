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
        return state;
      }

      state[id]--;
      if (state[id] === 0) {
        delete state[id];
      }
    },
  },
  selectors: {
    selectState: (state) => state,
    selectItemAmountById: (state, id) => state[id],
  },
});

export const selectItemIds = createSelector(
  cartSlice.selectors.selectState,
  (state) => Object.keys(state).map(Number)
);

export const { addItem, removeItem } = cartSlice.actions;
export const { selectItemAmountById } = cartSlice.selectors;
