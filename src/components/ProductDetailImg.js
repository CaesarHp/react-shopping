import React from "react";

import { Grid } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";

import womanFace1 from "../img/woman-face-1.jpg";
import womanFace2 from "../img/woman-face-2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    maxWidth: "100%",
    height: "100%",
  },
  smallImgContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  smallImg: {
    maxWidth: "85%",
  },
}));

function ProductDetailImg({ name, img }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={3}>
        <div className={classes.smallImgContainer}>
          <img alt={name} src={img} className={classes.smallImg} />
          <img alt="Woman Face" src={womanFace1} className={classes.smallImg} />
          <img alt="Woman Face" src={womanFace2} className={classes.smallImg} />
        </div>
      </Grid>
      <Grid item xs={9}>
        <img alt={name} src={img} className={classes.img} />
      </Grid>
    </Grid>
  );
}

export default ProductDetailImg;
