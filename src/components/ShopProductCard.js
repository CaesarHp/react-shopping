import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";

import ProductCard from "../ui/ProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4rem 0",
  },
}));

function ShopProductCard() {
  const classes = useStyles();

  const cardInfo = useSelector((state) => state.data.currentPage);

  return (
    <>
      <div className={classes.root}>
        <Grid container rowSpacing={6}>
          {cardInfo.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <ProductCard
                key={index}
                name={item.name}
                price={item.price}
                img={item.img}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default ShopProductCard;
