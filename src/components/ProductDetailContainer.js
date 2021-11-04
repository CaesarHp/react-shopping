import React from "react";

import { Grid } from "@mui/material";

import ProductDetailImg from "./ProductDetailImg";
import ProductDetailContent from "./ProductDetailContent";

function ProductDetailContainer({
  name,
  price,
  img,
  describe,
  brand,
  category,
  id,
}) {
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
