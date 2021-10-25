import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6rem",
  },
  imgContainer: {
    height: "30rem",
    overflow: "hidden",
    position: "relative",
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
}));

function ProductDetailContainer({ name, price, img }) {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={6} className={classes.imgContainer}>
          <img alt={name} src={img} className={classes.img} />
        </Grid>
        <Grid item xs={12} lg={6}></Grid>
      </Grid>
    </>
  );
}

export default ProductDetailContainer;
