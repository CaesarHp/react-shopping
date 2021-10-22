import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Sort from "../ui/Sort";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ShopMain() {
  const classes = useStyles();

  return (
    <div>
      <Sort />
    </div>
  );
}

export default ShopMain;
