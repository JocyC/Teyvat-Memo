import { configureStore } from "@reduxjs/toolkit";
import allItemsSlice from "./features/allItems/allItemsSlice";
import userSlice from "./features/user/userSlice";
import itemSlice from "./features/item/itemSlice";
import { apiSlice } from "./features/api/apiSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    allItems: allItemsSlice,
    item: itemSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
