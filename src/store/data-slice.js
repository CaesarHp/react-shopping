import { createSlice } from "@reduxjs/toolkit";

import { ALL_PRODUCTS_DATA } from "./all-products-data";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    newArrivalsInfo: [...ALL_PRODUCTS_DATA].filter((item, index) => index < 6),
    allProductsInfo: [...ALL_PRODUCTS_DATA],
  },
  reducers: {},
});

export const dataActions = dataSlice.actions;
export default dataSlice;
