import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carModel: "",
  priceMax: 0,
  priceMin: 0,
  carImg: "",
  id: "",
  status: "blocked",
};
const carSelect = createSlice({
  name: "carSelect",
  initialState,
  reducers: {
    selectCar(state, action) {
      const { carImg, carModel, id, priceMax, priceMin } = action.payload;
      return {
        carModel,
        priceMax,
        priceMin,
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
