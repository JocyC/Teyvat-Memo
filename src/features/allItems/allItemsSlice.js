import { createAction, createSlice } from "@reduxjs/toolkit";
import { HttpStatusCode } from "axios";
import { toast } from "react-toastify";

const initialFilterState = {
  searchContent: "",
  searchStatus: "all",
  searchType: "all",
};

const initialState = {
  isLoading: false,
  isError: false,
  itemList: [],
  ongoingList: [],
  nextList: [],
  doneList: [],
  ...initialFilterState,
};

const allItemsSlice = createSlice({
  name: "allItems",
  initialState,
  reducers: {
    getAllItems: (state) => {
      const newList = [...JSON.parse(localStorage.getItem("plan"))];

      const newItemList = newList.filter((item) => {
        const statusFilter =
          item.status === state.searchStatus || state.searchStatus === "all";
        const typeFilter =
          item.planType === state.searchType || state.searchType === "all";
        const searchFilter = item.selectedName
          .toLowerCase()
          .includes(state.searchContent.toLowerCase());
        return statusFilter && typeFilter && searchFilter;
      });

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
    handleFilterChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFilterState };
    },
  },
});

export const { clearAllItems, getAllItems, handleFilterChange, clearFilters } =
  allItemsSlice.actions;

export default allItemsSlice.reducer;

// const filteredList = newItemList.filter((item) => {
//   const statusFilter =
//     item.status === state.searchStatus || state.searchStatus === "all";
//   const typeFilter =
//     item.planType === state.searchType || state.searchType === "all";
//   const searchFilter = item.selectedName
//     .toLowerCase()
//     .includes(state.searchContent.toLowerCase());
//   return statusFilter && typeFilter && searchFilter;
// });
