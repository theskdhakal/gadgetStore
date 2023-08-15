import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: [],
  cartItem: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setCartItem: (state, action) => {
      state.cartItem = action.payload;
    },
  },
});

export const { setSearchValue, setCartItem } = searchSlice.actions;

export default searchSlice.reducer;
