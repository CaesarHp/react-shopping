import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ProductDetailImg from "./ProductDetailImg";
import ProductDetailContent from "./ProductDetailContent";

const useStyles = makeStyles((theme) => ({}));

function ProductDetailContainer({
  name,
  price,
  img,
  describe,
  brand,
  category,
  id,
}) {
  const classes = useStyles();

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} lg={6}>
          <ProductDetailImg img={img} name={name} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ProductDetailContent
            name={name}
            img={img}
            price={price}
            describe={describe}
            brand={brand}
            category={category}
            id={id}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ProductDetailContainer;
