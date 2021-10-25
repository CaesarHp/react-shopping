import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Sort from "../ui/Sort";
import Filter from "../ui/Filter";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 2rem",
  },
  path: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginBottom: "2rem",
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

function ShopHeader() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={6}>
            <Typography variant="body1" className={classes.path}>
              Shop / Category
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className={classes.btnContainer}>
              <Sort />
              <Filter />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ShopHeader;
