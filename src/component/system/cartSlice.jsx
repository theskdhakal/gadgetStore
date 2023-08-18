import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },

    updateCartItemQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.id === itemId);

      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
    },

    removeCartItem: (state, action) => {
      const { itemId } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setCart, updateCartItemQuantity, removeCartItem, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
