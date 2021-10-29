import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import CartProductCard from "../ui/CartProductCard";
import CartTotalCard from "../ui/CartTotalCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10rem 6rem",
  },
  title: {
    marginBottom: "3rem",
    textAlign: "center",
  },
  divider: {
    backgroundColor: theme.palette.divider,
    margin: "2rem 1rem",
  },
}));

function CartMain() {
  const classes = useStyles();

  const cartItemInfo = useSelector((state) => state.data.cartItem);
  const totalQuantity = useSelector((state) => state.data.cartTotalQuantity);
  const totalPrice = useSelector((state) => state.data.cartTotalPrice);

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
            <Grid container columnSpacing={4}>
              <Grid item xs={8}>
                {cartItemInfo.length === 0 ? (
                  <Typography variant="body1" className={classes.noItem}>
                    No item in cart
                  </Typography>
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
              <Grid item xs={4}>
                <CartTotalCard totalPrice={totalPrice} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CartMain;
