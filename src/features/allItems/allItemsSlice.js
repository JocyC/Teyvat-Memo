import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialFilterState = {
  searchContent: "",
  searchStatus: "all",
  searchType: "all",
};

const initialState = {
  isLoading: false,
  isError: false,
  totalNumber: 0,
  ongoingNumber: 0,
  nextNumber: 0,
  doneNumber: 0,
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
      if (localStorage.getItem("plan")) {
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
          totalNumber: newItemList.length,
          ongoingNumber: newOngoingList.length,
          nextNumber: newNextList.length,
          doneNumber: newDoneList.length,
        };
        return { ...state };
      }
    },
    clearAllItems: () => {
      localStorage.setItem("plan", JSON.stringify([]));
      return {
        ...initialState,
        totalItems: 0,
        ongoingNumber: 0,
        nextNumber: 0,
        doneNumber: 0,
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
