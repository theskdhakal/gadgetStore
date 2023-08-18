import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupShow: false,
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setPopupShow: (state, action) => {
      state.popupShow = action.payload;
    },
  },
});

export const { setPopupShow } = systemSlice.actions;
export default systemSlice.reducer;
