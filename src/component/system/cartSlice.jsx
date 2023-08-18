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

    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
