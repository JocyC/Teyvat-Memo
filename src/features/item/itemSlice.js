import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllItems } from "../allItems/allItemsSlice";

const initialState = {
  isLoading: false,
  isEditing: false,
  editItemName: "",
  editItemType: "",

  planType: "farm",
  planTypeOptions: ["save", "farm"],
  status: "ongoing",
  statusOptions: ["ongoing", "next", "done"],
  constellation: 0,
  ascendLow: 0,
  ascendHigh: 90,
};

export const createPlan = (plan) => {
  // change this to POST method with database later
  const planList = JSON.parse(localStorage.getItem("plan"));
  // no plans yet
  if (!planList) {
    localStorage.setItem("plan", JSON.stringify([plan]));
    toast.success("Your first plan is created successfully");
    return;
  }
  // if a type of plan for someone already exists, just edit it
  const existingItemIndex = planList.findIndex(
    (item) =>
      item.selectedName === plan.selectedName && item.planType === plan.planType
  );
  if (existingItemIndex === -1) {
    localStorage.setItem("plan", JSON.stringify([...planList, plan]));
    toast.success("A new plan is created successfully");
    return;
  }
  planList[existingItemIndex] = {
    ...planList[existingItemIndex],
    status: plan.status,
    ascendLow: plan.ascendLow,
    ascendHigh: plan.ascendHigh,
    constellation: plan.constellation,
  };
  localStorage.setItem("plan", JSON.stringify([...planList]));
  toast.success("Your plan is updated successfully");
  getAllItems();
};

// export const createPlan = (plan) => {
//   // change this to POST method with database later
//   if (localStorage.getItem("plan")) {
//     const planList = JSON.parse(localStorage.getItem("plan"));
//     // if a type of plan for someone already exists, just edit it
//     const isInside = planList.findIndex(
//       (item) =>
//         item.selectedName === plan.selectedName &&
//         item.planType === plan.planType
//     );
//     if (isInside || isInside === 0) {
//       planList[isInside] = {
//         ...planList[isInside],
//         status: plan.status,
//         ascendLow: plan.ascendLow,
//         ascendHigh: plan.ascendHigh,
//         constellation: plan.constellation,
//       };
//       localStorage.setItem("plan", JSON.stringify(planList));
//       toast.success("Your plan is updated successfully");
//     } else {
//       localStorage.setItem("plan", JSON.stringify([...planList, plan]));
//       toast.success("A new plan is created successfully");
//     }
//   } else {
//     localStorage.setItem("plan", JSON.stringify([plan]));
//     toast.success("A new plan is created successfully");
//   }
//   getAllItems();
// };

export const deletePlan = (plan) => {
  // change this to POST method with database later
  if (localStorage.getItem("plan")) {
    const planList = JSON.parse(localStorage.getItem("plan"));
    const newList = planList.filter((item) => {
      return (
        item.selectedName !== plan.selectedName ||
        item.planType !== plan.planType
      );
    });
    localStorage.setItem("plan", JSON.stringify([...newList]));
    toast.success("The plan is deleted successfully");
    return;
  }
  toast.error("Something went wrong...");
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
    setEditItem: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    editItem: (state, { payload }) => {
      return { ...state, isEditing: false, ...payload };
    },
  },
});

export const { handleChange, clearValues, setEditItem, editItem } =
  itemSlice.actions;

export default itemSlice.reducer;
