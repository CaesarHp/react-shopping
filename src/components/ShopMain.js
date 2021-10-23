import React from "react";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Sort from "../ui/Sort";
import Filter from "../ui/Filter";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6rem 4rem",
  },
  path: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  btn: {
    borderRadius: 0,
    fontSize: "1rem",
    padding: "0.8rem 2rem",
    fontWeight: 400,
    textTransform: "none",
    color: "black",
    marginLeft: "2rem",
    borderColor: "black",
  },
}));

function ShopMain() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item sm={12} md={6} className={classes.path}>
                <Typography variant="body1">Shop/Category</Typography>
              </Grid>
              <Grid item sm={12} md={6}>
                <div className={classes.btnContainer}>
                  <Sort />
                  <Filter />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
    </>
  );
}

export default ShopMain;
