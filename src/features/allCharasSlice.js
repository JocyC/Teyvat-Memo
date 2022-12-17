import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  charas: [],
  totalCharas: 0,
};

const allCharasSlice = createSlice({
  name: "allCharas",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    clearAllCharasState: () => initialState,
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(getAllCharacters.pending, (state) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(getAllCharacters.fulfilled, (state, { payload }) => {
  //         state.isLoading = false;
  //         state.charas = payload.charas;
  //       })
  //       .addCase(getAllCharacters.rejected, (state, { payload }) => {
  //         state.isLoading = false;
  //         toast.error(payload);
  //       });
});

export default allCharasSlice;
