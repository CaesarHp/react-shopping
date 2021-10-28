import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ProductDetailContainer from "./ProductDetailContainer";
import HomeProductCard from "./HomeProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10rem 6rem",
  },
  path: {
    marginBottom: "3rem",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

function ProductDetailMain({
  name,
  price,
  img,
  category,
  describe,
  brand,
  id,
}) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1" className={classes.path}>
              Shop / Category / {category}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ProductDetailContainer
              name={name}
              price={price}
              img={img}
              describe={describe}
              brand={brand}
              category={category}
              id={id}
            />
          </Grid>
          <Grid item xs={12}>
            <HomeProductCard />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ProductDetailMain;
