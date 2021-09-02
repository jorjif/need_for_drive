import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carModel: "",
  priceMax: 0,
  priceMin: 0,
  carImg: "",
  id: "",
  colors: [],
  plate: "",
  status: "blocked",
};
const carSelect = createSlice({
  name: "carSelect",
  initialState,
  reducers: {
    selectCar(state, action) {
      const { carImg, carModel, id, priceMax, priceMin, plate, colors, fuel } =
        action.payload;
      return {
        carModel,
        priceMax,
        priceMin,
        carImg,
        id,
        status: state.status,
        plate,
        colors,
        fuel,
      };
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { selectCar, changeStatus } = carSelect.actions;
export default carSelect.reducer;
