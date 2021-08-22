import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carModel: "",
  priceRange: "",
  carImg: "",
  id: "",
  status: "blocked",
};
const carSelect = createSlice({
  name: "carSelect",
  initialState,
  reducers: {
    selectCar(state, action) {
      const { carImg, carModel, id, priceRange } = action.payload;
      console.table(action.payload);
      return {
        carModel,
        priceRange,
        carImg,
        id,
        status: state.status,
      };
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { selectCar, changeStatus } = carSelect.actions;
export default carSelect.reducer;
