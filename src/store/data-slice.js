import { createSlice } from "@reduxjs/toolkit";

import { ALL_PRODUCTS_DATA } from "./all-products-data";
import { ALL_BRANDS_DATA } from "./all-brands-data";
import { ALL_CATEGORIES } from "./all-categories-data";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    allProductsInfo: [...ALL_PRODUCTS_DATA],
    newArrivalsInfo: [...ALL_PRODUCTS_DATA].filter((item, index) => index < 6),

    pageOne: [...ALL_PRODUCTS_DATA].filter((item, index) => index < 12),
    pageTwo: [...ALL_PRODUCTS_DATA].filter((item, index) => index >= 12),
    currentPage: [...ALL_PRODUCTS_DATA].filter((item, index) => index < 12),
    currentPageNumber: 1,
    pages: 2,

    cartItem: [],
    cartTotalQuantity: 0,
    cartTotalPrice: 0,
    shippingFee: 10,
    drawerState: false,

    brands: [...ALL_BRANDS_DATA].sort(function (a, b) {
      const brandA = a.brandName.toUpperCase();
      const brandB = b.brandName.toUpperCase();
      if (brandA < brandB) {
        return -1;
      }
      if (brandA > brandB) {
        return 1;
      }
      return 0;
    }),

    categories: [...ALL_CATEGORIES],
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

    addItemToCart(state, action) {
      const newItem = action.payload;
      const exsitingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );

      if (!exsitingItem) {
        state.cartItem.push(newItem);
        state.cartTotalQuantity++;
      } else {
        exsitingItem.number = exsitingItem.number + newItem.number;
        exsitingItem.price = exsitingItem.retail * exsitingItem.number;
      }

      const priceList = state.cartItem.map((item) => {
        return item.number * item.retail;
      });
      const sumPrice = (accumulator, curr) => accumulator + curr;
      state.cartTotalPrice = priceList.reduce(sumPrice);
    },

    addExsitingItem(state, action) {
      const id = action.payload;
      const exsitingItem = state.cartItem.find((item) => item.id === id);
      exsitingItem.number++;
      exsitingItem.price = exsitingItem.price + exsitingItem.retail;
      state.cartTotalPrice = state.cartTotalPrice + exsitingItem.retail;
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const exsitingItem = state.cartItem.find((item) => item.id === id);

      if (exsitingItem.number === 1) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
        state.cartTotalQuantity--;
        state.cartTotalPrice = state.cartTotalPrice - exsitingItem.retail;
      } else {
        exsitingItem.number--;
        exsitingItem.price = exsitingItem.price - exsitingItem.retail;
        state.cartTotalPrice = state.cartTotalPrice - exsitingItem.retail;
      }
    },

    clearItemFromCart(state, action) {
      const id = action.payload;
      const exsitingItem = state.cartItem.find((item) => item.id === id);

      state.cartItem = state.cartItem.filter((item) => item.id !== id);
      state.cartTotalQuantity--;
      state.cartTotalPrice = state.cartTotalPrice - exsitingItem.price;
    },

    changeShippingFee(state, action) {
      const method = action.payload;

      if (method === "Standard") {
        state.shippingFee = 10;
      } else if (method === "Express") {
        state.shippingFee = 20;
      }
    },

    toggleDrawer(state, action) {
      state.drawerState = action.payload;
    },

    categoryFilter(state, action) {
      const selectedCategory = action.payload;

      if (selectedCategory !== "View All") {
        const filteredProductsPageOne =
          state.pageOne &&
          state.pageOne.filter((item) => item.category === selectedCategory);
        const filteredProductsPageTwo =
          state.pageTwo &&
          state.pageTwo.filter((item) => item.category === selectedCategory);

        if (filteredProductsPageOne && filteredProductsPageOne.length < 12) {
          state.pageOne = filteredProductsPageOne;
          state.currentPage = filteredProductsPageOne;
          state.pageTwo = [];
          state.pages = 1;
        } else if (
          filteredProductsPageOne &&
          filteredProductsPageOne.length >= 12
        ) {
          state.pageOne = filteredProductsPageOne.filter(
            (item, index) => index < 12
          );
          state.currentPage = filteredProductsPageOne.filter(
            (item, index) => index < 12
          );
          state.pageTwo = filteredProductsPageTwo.filter(
            (item, index) => index >= 12
          );
        } else {
          state.pageOne = [];
          state.currentPage = [];
          state.pageTwo = [];
          state.pages = 1;
        }
      } else {
        state.pageOne = state.allProductsInfo.filter(
          (item, index) => index < 12
        );
        state.pageTwo = state.allProductsInfo.filter(
          (item, index) => index >= 12
        );
        state.currentPage = state.allProductsInfo.filter(
          (item, index) => index < 12
        );
        state.pages = 2;
      }
    },

    brandFilter(state, action) {
      const selectedBrand = action.payload;

      if (selectedBrand !== "View All") {
        const filteredProductsPageOne =
          state.pageOne &&
          state.pageOne.filter((item) => item.brand === selectedBrand);
        const filteredProductsPageTwo =
          state.pageTwo &&
          state.pageTwo.filter((item) => item.brand === selectedBrand);

        if (filteredProductsPageOne && filteredProductsPageOne.length < 12) {
          state.pageOne = filteredProductsPageOne;
          state.currentPage = filteredProductsPageOne;
          state.pageTwo = [];
          state.pages = 1;
        } else if (
          filteredProductsPageOne &&
          filteredProductsPageOne.length >= 12
        ) {
          state.pageOne = filteredProductsPageOne.filter(
            (item, index) => index < 12
          );
          state.currentPage = filteredProductsPageOne.filter(
            (item, index) => index < 12
          );
          state.pageTwo = filteredProductsPageTwo.filter(
            (item, index) => index >= 12
          );
        } else {
          state.pageOne = [];
          state.currentPage = [];
          state.pageTwo = [];
          state.pages = 1;
        }
      } else {
        state.pageOne = state.allProductsInfo.filter(
          (item, index) => index < 12
        );
        state.pageTwo = state.allProductsInfo.filter(
          (item, index) => index >= 12
        );
        state.currentPage = state.allProductsInfo.filter(
          (item, index) => index < 12
        );
        state.pages = 2;
      }
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
