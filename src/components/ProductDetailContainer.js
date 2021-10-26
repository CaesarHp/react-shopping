import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6rem",
  },
  imgContainer: {},
  img: {
    //height: "80%",
    width: "80%",
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
        <Grid item xs={12} lg={6}>
          <Typography variant="body2">
            * All images and infos from Sephora.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductDetailContainer;
