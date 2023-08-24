import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latestProducts: [],
};

const NewSlice = createSlice({
  name: "featured",
  initialState,
  reducers: {
    setLatestProducts: (state, action) => {
      state.latestProducts = action.payload;
    },
  },
});

export const { setLatestProducts } = NewSlice.actions;

export default NewSlice.reducer;
