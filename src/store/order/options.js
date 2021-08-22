import { createSlice } from "@reduxjs/toolkit";

const dateFrom = new Date().toDateString();
const dateTo = new Date().toDateString();
const initialState = {
  Цвет: "Любой",
  date: {
    from: dateFrom,
    to: dateTo,
    "Длительность аренды": "",
  },
  Тариф: "Поминутно",
  status: "blocked",
};
const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setStartDate({ date }, action) {
      date.from = action.payload.toDateString();
    },
    setEndDate({ date }, action) {
      date.to = action.payload.toDateString();
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setStartDate, setEndDate, changeStatus } = optionsSlice.actions;
export default optionsSlice.reducer;
