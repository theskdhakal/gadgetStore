import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupShow: false,
  isCartOpen: false,
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setPopupShow: (state, action) => {
      state.popupShow = action.payload;
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
});

export const { setPopupShow, setIsCartOpen } = systemSlice.actions;
export default systemSlice.reducer;
