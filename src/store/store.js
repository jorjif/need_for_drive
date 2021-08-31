import { configureStore } from "@reduxjs/toolkit";
import carSelectReducer from "./order/carSelect";
import adressReducer from "./order/adress";
import optionsReducer from "./order/options";
import statusReducer from "./order/confirmation";
import accessSlice from "./order/orderAcess";
const store = configureStore({
  reducer: {
    adress: adressReducer,
    car: carSelectReducer,
    options: optionsReducer,
    status: statusReducer,
    access: accessSlice,
  },
});
export default store;
