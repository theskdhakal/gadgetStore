import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  selectedProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setSelectedProducts: (state, action) => {
      state.selectedProducts = action.payload;
    },
  },
});

export const { setProduct, setSelectedProducts } = productSlice.actions;

export default productSlice.reducer;
