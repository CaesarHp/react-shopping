import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import CartTotalCard from "../ui/CartTotalCard";
import PaymentForm from "../ui/PaymentForm";

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

function PaymentMain() {
  const classes = useStyles();

  const cartItemInfo = useSelector((state) => state.data.cartItem);
  const totalPrice = useSelector((state) => state.data.cartTotalPrice);
  const shippingFee = useSelector((state) => state.data.shippingFee);

  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          columnSpacing={{ xs: 0, lg: 6 }}
          rowSpacing={{ xs: 4, lg: 0 }}
        >
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.title}>
              Payment
            </Typography>
          </Grid>
          <Grid item xs={12} lg={8}>
            <PaymentForm />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CartTotalCard totalPrice={totalPrice} shippingFee={shippingFee} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default PaymentMain;
