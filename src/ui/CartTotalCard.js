import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/styles";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem",
    borderRadius: 0,
  },
  flexHorizontal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexVertical: {
    display: "flex",
    alignItems: "center",
  },

  subtitle: {
    marginBottom: "1rem",
  },
  divider: {
    backgroundColor: theme.palette.divider,
    margin: "2rem 0",
  },

  btn: {
    borderRadius: 0,
    padding: "0.8rem 2rem",
    backgroundColor: "black",
    fontWeight: 400,
    textTransform: "none",
    color: "white",

    "&:hover": {
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#616161",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#616161",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      borderRadius: 0,
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid black",
    },
  },
});

function CartTotalCard({ totalPrice, shippingFee }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [shipping, setShipping] = useState("Standard");

  const shippingChangeHandler = (e) => {
    setShipping(e.target.value);

    dispatch(dataActions.changeShippingFee(e.target.value));
  };

  return (
    <>
      <Paper elevation={2} className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.flexHorizontal}>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
            </div>
            <Divider className={classes.divider} light />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.subtitle}>
              Shipping
            </Typography>
            <FormControl component="fieldset" style={{ width: "100%" }}>
              <RadioGroup
                name="shipping"
                value={shipping}
                onChange={shippingChangeHandler}
              >
                <div className={classes.flexHorizontal}>
                  <FormControlLabel
                    value="Standard"
                    control={<Radio color="default" />}
                    label="Standard"
                  />
                  <div className={classes.flexVertical}>
                    <Typography variant="body1">$10.00</Typography>
                  </div>
                </div>
                <div className={classes.flexHorizontal}>
                  <FormControlLabel
                    value="Express"
                    control={<Radio color="default" />}
                    label="Express"
                  />
                  <div className={classes.flexVertical}>
                    <Typography variant="body1">$20.00</Typography>
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
            <Divider className={classes.divider} light />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.flexHorizontal}>
              <Typography variant="h6">Coupon</Typography>
              <CssTextField variant="outlined" id="coupon" label="Code" />
            </div>
            <Divider className={classes.divider} light />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.flexHorizontal}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">
                ${(totalPrice + shippingFee).toFixed(2)}
              </Typography>
            </div>
            <Divider className={classes.divider} light />
          </Grid>

          <Grid item xs={12}>
            <div>
              <Button
                variant="contained"
                disableElevation
                component={Link}
                to="/cart/payment"
                className={classes.btn}
              >
                Check Out
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default CartTotalCard;
