import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const itemList = [...JSON.parse(localStorage.getItem("plan"))];
const ongoingList = itemList.filter((item) => {
  return item.status === "ongoing";
});
const nextList = itemList.filter((item) => {
  return item.status === "next";
});
const doneList = itemList.filter((item) => {
  return item.status === "done";
});

const initialState = {
  isLoading: false,
  itemList,
  totalItems: itemList.length,
  ongoingList,
  nextList,
  doneList,
};

const allItemsSlice = createSlice({
  name: "allItems",
  initialState,
  reducers: {
    clearAllItemsState: () => {
      return { ...initialState };
    },
  },
});

export const { clearAllItemsState } = allItemsSlice.actions;

export default allItemsSlice.reducer;
