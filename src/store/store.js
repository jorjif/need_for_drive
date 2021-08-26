import { configureStore } from "@reduxjs/toolkit";
import carSelectReducer from "./order/carSelect";
import adressReducer from "./order/adress";
import optionsReducer from "./order/options";
import statusReducer from "./order/confirmation";
import accessSlice from "./order/orderAcess";
import carStore from "./order/carStore";

const store = configureStore({
  reducer: {
    adress: adressReducer,
    car: carSelectReducer,
    carStore: carStore,
    options: optionsReducer,
    status: statusReducer,
    access: accessSlice,
  },
});
export default store;
