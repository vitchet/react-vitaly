import { createSlice } from "@reduxjs/toolkit";

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
    selectItemIds: (state) => Object.keys(state).map((id) => id),
    selectItemAmountById: (state, id) => state[id],
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const { selectItemAmountById, selectItemIds } = cartSlice.selectors;
