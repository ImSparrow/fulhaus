import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    price: 0,
    display: false,
  },
  reducers: {
    add: (state, action) => {
      state.price += action.payload.product.price;
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.product.id;
      });

      if (existingCartItemIndex !== -1) {
        state.items.forEach((item, index) => {
          if (index === existingCartItemIndex) {
            item.amount += 1;
          }
        });
      } else {
        state.items = state.items.concat(action.payload.product);
      }
    },
    remove: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.product.id
      );
      const existingItem = state.items[existingCartItemIndex];
      state.price -= existingItem.price;
      if (existingItem.amount === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.product.id
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        state.items[existingCartItemIndex] = updatedItem;
      }
    },
    toggle: (state) => {
      state.display = !state.display;
    },
  },
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
