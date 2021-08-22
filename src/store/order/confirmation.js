import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupOpen: false,
  orderConfirmed: false,
  status: "blocked",
};

const confirmationSlice = createSlice({
  name: "confirmation",
  initialState,
  reducers: {
    popupCloseOpen({ popupOpen }) {
      popupOpen = !popupOpen;
    },
    confirmOrder({ orderConfirmed }) {
      orderConfirmed = !orderConfirmed;
    },
  },
});
export const { popupCloseOpen, confirmOrder } = confirmationSlice.actions;
export default confirmationSlice.reducer;
