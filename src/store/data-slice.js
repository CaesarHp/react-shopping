import { createSlice } from "@reduxjs/toolkit";

import spray from "../img/cosmetic-mockup-01.jpg";
import pump from "../img/cosmetic-mockup-02.jpg";
import drop from "../img/cosmetic-mockup-03.jpg";
import jar from "../img/cosmetic-mockup-04.jpg";
import sprayGrey from "../img/cosmetic-mockup-05.jpg";
import pumpGrey from "../img/cosmetic-mockup-06.jpg";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    roomsInfo: [
      {
        name: "Spray",
        price: 89.99,
        img: spray,
        id: "spray",
      },
      {
        name: "Pump",
        price: 89.99,
        img: pump,
        id: "pump",
      },
      {
        name: "Drop",
        price: 89.99,
        img: drop,
        id: "drop",
      },
      {
        name: "Jar",
        price: 89.99,
        img: jar,
        id: "jar",
      },
      {
        name: "Spray Grey",
        price: 89.99,
        img: sprayGrey,
        id: "spray-grey",
      },
      {
        name: "Pump Grey",
        price: 89.99,
        img: pumpGrey,
        id: "pump-grey",
      },
    ],

    selectedRoom: [],

    checkInInfo: [],
  },
  reducers: {},
});

export const dataActions = dataSlice.actions;
export default dataSlice;
