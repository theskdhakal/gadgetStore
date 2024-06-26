import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: {},
};

const ClientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClient: (state, action) => {
      state.client = action.payload;
    },
  },
});

export const { setClient } = ClientSlice.actions;
export default ClientSlice.reducer;
