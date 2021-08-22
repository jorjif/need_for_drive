import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startPrice: "0",
  maxPrice: "0",
};
const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setStartPrice(state, action) {
      state.startPrice = action.payload;
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
  },
});
