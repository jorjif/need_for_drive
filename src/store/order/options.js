import { createSlice } from "@reduxjs/toolkit";

const dateFrom = new Date().toDateString();
const dateTo = new Date().toDateString();
const initialState = {
  color: "",
  date: {
    from: dateFrom,
    to: dateTo,
    difference: "",
  },
  tariff: "Поминутно",
  options: {},
  status: "blocked",
};
const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    changeColor(store, action) {
      store.color = action.payload;
    },

    addOption(store, action) {
      return {
        ...store,
        options: {
          ...store.options,
          [action.payload]: true,
        },
      };
    },

    removeOption(store, action) {
      store.optionsSlice.options[action.payload] = false;
    },

    changeStartDate({ date }, action) {
      date.from = action.payload.toDateString();
    },

    changeEndDate({ date }, action) {
      date.to = action.payload.toDateString();
    },

    changeDateDifference(store, action) {
      store.date.difference = action.payload;
    },

    changeTariff(store, action) {
      store.tariff = action.payload;
    },

    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const {
  changeStartDate,
  changeEndDate,
  changeStatus,
  changeColor,
  changeDateDifference,
  changeTariff,
  addOption,
  removeOption,
} = optionsSlice.actions;
export default optionsSlice.reducer;
