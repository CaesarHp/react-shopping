import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ProductDetailContainer from "./ProductDetailContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6rem",
  },
  path: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginBottom: "2rem",
    },
  },
}));

function ProductDetailMain({ name, price, img }) {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="body1" className={classes.path}>
            Shop / Category
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ProductDetailContainer name={name} price={price} img={img} />
        </Grid>
      </Grid>
    </>
  );
}

export default ProductDetailMain;
