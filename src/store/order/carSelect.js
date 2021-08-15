import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carModel: "",
  carPrice: {
    startPrice: 10000,
    endPrice: 32000,
  },
  carImg: "",
};
const carSelect = createSlice({
  name: "carSelect",
  initialState,
  reducers: {
    selectCar(state, { payload }) {
      state = {
        carModel: payload.carModel,
        carPrice: {
          startPrice: payload.startPrice,
          endPrice: payload.endPrice,
        },
        carImg: payload.carImg,
      };
    },
  },
});
export const { selectCar } = carSelect.actions;
export default carSelect.reducer;
