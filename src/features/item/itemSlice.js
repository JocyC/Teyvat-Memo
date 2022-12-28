import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  isEditing: false,
  editItemId: "",

  // left in big screen, show/hide in small screen
  itemType: "character",
  itemTypeOptions: "weapon",

  // right in big screen, show/hide in small screen
  planType: "farm",
  planTypeOptions: ["save", "farm"],
  status: "ongoing",
  statusOptions: ["ongoing", "done", "next"],
  constellation: 0,
  ascendLow: 0,
  ascendHigh: 90,
};

export const createPlan = (plan) => {
  // change this to POST method with database later
  if (localStorage.getItem("plan")) {
    const planList = JSON.parse(localStorage.getItem("plan"));
    localStorage.setItem("plan", JSON.stringify([...planList, plan]));
  } else {
    localStorage.setItem("plan", JSON.stringify([plan]));
  }
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return { ...initialState };
    },
  },
});

export const { handleChange, clearValues } = itemSlice.actions;

export default itemSlice.reducer;
