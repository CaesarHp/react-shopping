import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ProductCard from "../ui/ProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4rem 0",
  },
}));

function ShopProductCard() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const cardInfo = useSelector((state) => state.data.currentPage);
  const allProductsInfo = useSelector((state) => state.data.allProductsInfo);

  useEffect(() => {
    dispatch(dataActions.init());
  }, [allProductsInfo, dispatch]);

  return (
    <>
      <div className={classes.root}>
        <Grid container rowSpacing={6}>
          {cardInfo.length > 0 ? (
            cardInfo.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <ProductCard
                  key={index}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  id={item.id}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                No product matches
              </Typography>
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
}

export default ShopProductCard;
