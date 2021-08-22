import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  city: "",
  street: "",
  status: "complete",
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
