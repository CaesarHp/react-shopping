import { createSlice } from "@reduxjs/toolkit";

import { NEW_ARRIVALS_DATA } from "./new-arrivals-data";
import { ALL_PRODUCTS_DATA } from "./all-products-data";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    newArrivalsInfo: [...NEW_ARRIVALS_DATA],
    allProductsInfo: [...ALL_PRODUCTS_DATA],
  },
  reducers: {},
});

export const dataActions = dataSlice.actions;
export default dataSlice;
