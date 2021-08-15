import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  city: "",
  street: "",
};
const adressSlice = createSlice({
  name: "adress",
  initialState,
  reducers: {
    cityChanged({ city }, { payload }) {
      city = payload;
    },
    streetChanged({ street }, { payload }) {
      street = payload;
    },
  },
});
export const { cityChanged, streetChanged } = adressSlice.actions;
export default adressSlice.reducer;
