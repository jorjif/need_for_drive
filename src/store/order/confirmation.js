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
    changeStatus(store, action) {
      store.status = action.payload;
    },

    popupCloseOpen(store, action) {
      store.popupOpen = action.payload;
    },

    confirmOrder(store, action) {
      store.orderConfirmed = action.payload;
    },
  },
});
export const { popupCloseOpen, confirmOrder, changeStatus } =
  confirmationSlice.actions;
export default confirmationSlice.reducer;
