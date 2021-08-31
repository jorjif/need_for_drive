import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  city: "",
  street: "",
  streetNoSpace: "",
  status: "blocked",
};
const adressSlice = createSlice({
  name: "adress",
  initialState,
  reducers: {
    changeStatus(state, action) {
      state.status = action.payload;
    },

    cityChanged(state, action) {
      state.city = action.payload;
    },

    streetChanged(state, action) {
      state.street = action.payload;
      const streetNoSpace = action.payload.replace(" ", "\u00A0");
      state.streetNoSpace = streetNoSpace;
    },
  },
});
export const {
  cityChanged,
  streetChanged,
  changeStatus,
  confirmCity,
  confirmStreet,
} = adressSlice.actions;
export default adressSlice.reducer;
