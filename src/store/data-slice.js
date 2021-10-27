import { createSlice } from "@reduxjs/toolkit";

import { ALL_PRODUCTS_DATA } from "./all-products-data";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    allProductsInfo: [...ALL_PRODUCTS_DATA],
    newArrivalsInfo: [...ALL_PRODUCTS_DATA].filter((item, index) => index < 6),
    pageOne: [...ALL_PRODUCTS_DATA].filter((item, index) => index < 12),
    pageTwo: [...ALL_PRODUCTS_DATA].filter((item, index) => index > 12),
    currentPage: [...ALL_PRODUCTS_DATA].filter((item, index) => index < 12),
    currentPageNumber: 1,
  },
  reducers: {
    changePage(state, action) {
      if (action.payload === 1) {
        state.currentPage = state.pageOne;
        state.currentPageNumber = 1;
      } else {
        state.currentPage = state.pageTwo;
        state.currentPageNumber = 2;
      }
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
