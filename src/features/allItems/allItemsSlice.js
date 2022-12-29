import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const iniItemList = [...JSON.parse(localStorage.getItem("plan"))];
const iniOngoingList = iniItemList.filter((item) => {
  return item.status === "ongoing";
});
const iniNextList = iniItemList.filter((item) => {
  return item.status === "next";
});
const iniDoneList = iniItemList.filter((item) => {
  return item.status === "done";
});

const initialState = {
  isLoading: false,
  isError: false,
  itemList: iniItemList,
  ongoingList: iniOngoingList,
  nextList: iniNextList,
  doneList: iniDoneList,
};

const allItemsSlice = createSlice({
  name: "allItems",
  initialState,
  reducers: {
    getAllItems: (state) => {
      const newItemList = [...JSON.parse(localStorage.getItem("plan"))];
      const newOngoingList = newItemList.filter((item) => {
        return item.status === "ongoing";
      });
      const newNextList = newItemList.filter((item) => {
        return item.status === "next";
      });
      const newDoneList = newItemList.filter((item) => {
        return item.status === "done";
      });
      return {
        ...state,
        itemList: newItemList,
        ongoingList: newOngoingList,
        nextList: newNextList,
        doneList: newDoneList,
      };
    },
    clearAllItems: () => {
      return {
        ...initialState,
        itemList: [],
        ongoingList: [],
        nextList: [],
        doneList: [],
      };
    },
  },
});

export const { clearAllItems, getAllItems } = allItemsSlice.actions;

export default allItemsSlice.reducer;
