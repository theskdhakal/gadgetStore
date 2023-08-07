import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setcategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setcategory } = categorySlice.actions;

export default categorySlice.reducer;
