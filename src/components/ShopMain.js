import React from "react";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Sort from "../ui/Sort";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6rem 8rem",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  btn: {
    borderRadius: 0,
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
              <Grid item xs={6}>
                <Typography variant="body1">Shop/Category</Typography>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.btnContainer}>
                  <Sort />
                  <Button
                    variant="outlined"
                    disableElevation
                    className={classes.btn}
                  >
                    Filter
                  </Button>
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
