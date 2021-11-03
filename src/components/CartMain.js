import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import CartProductCard from "../ui/CartProductCard";
import CartTotalCard from "../ui/CartTotalCard";
import ProductHeadTitle from "../ui/ProductHeadTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10rem 6rem",
  },
  title: {
    marginBottom: "4rem",
    textAlign: "center",
  },
  divider: {
    backgroundColor: theme.palette.divider,
    margin: "2rem 0",
  },
}));

function CartMain() {
  const classes = useStyles();

  const cartItemInfo = useSelector((state) => state.data.cartItem);
  const totalPrice = useSelector((state) => state.data.cartTotalPrice);
  const shippingFee = useSelector((state) => state.data.shippingFee);

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.title}>
              Shopping Cart
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              columnSpacing={{ xs: 0, lg: 6 }}
              rowSpacing={{ xs: 4, lg: 0 }}
            >
              <Grid item xs={12} lg={8}>
                <Grid container>
                  <Grid item xs={12}>
                    <ProductHeadTitle />
                    <Divider className={classes.divider} light />
                  </Grid>
                  <Grid item xs={12}>
                    {cartItemInfo.length === 0 ? (
                      <Typography variant="body1">No item in cart</Typography>
                    ) : (
                      cartItemInfo.map((item, index) => (
                        <div key={index}>
                          <CartProductCard
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            price={item.price}
                            retail={item.retail}
                            id={item.id}
                            number={item.number}
                          />
                          <Divider
                            key={index + 1}
                            className={classes.divider}
                            light
                          />
                        </div>
                      ))
                    )}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={4}>
                <CartTotalCard
                  totalPrice={totalPrice}
                  shippingFee={shippingFee}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CartMain;
