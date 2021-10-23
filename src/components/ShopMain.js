import React from "react";

import { Grid } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";

import ShopHeader from "./ShopHeader";
import ShopProductCard from "./ShopProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6rem",
  },
}));

function ShopMain() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <ShopHeader />
          </Grid>
          <Grid item xs={12}>
            <ShopProductCard />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ShopMain;
