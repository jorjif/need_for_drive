import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carList: [],
  error: "",
};
//я забыл про то что редукс не асинхронен, код ниже  не имеет смысла (но пусть пока побудет тут)
const carStore = createSlice({
  name: "carStore",
  initialState,
  reducers: {
    setCarStore(store, action) {
      store.carList = action.payload;
    },

    setError(store, action) {
      store.error = action.payload;
    },
  },
});

export const { setCarStore, setError } = carStore.actions;
export default carStore;
