import { configureStore } from "@reduxjs/toolkit";
import carSelectReducer from "./order/carSelect";
import adressReducer from "./order/adress";
import optionsReducer from "./order/options";
import statusReducer from "./order/confirmation";
const store = configureStore({
  reducer: {
    adress: adressReducer,
    car: carSelectReducer,
    options: optionsReducer,
    status: statusReducer,
  },
});
export default store;
