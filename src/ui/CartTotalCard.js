import React from "react";
import { useState } from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem",
    borderRadius: 0,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: 400,
    marginBottom: "2rem",
    textAlign: "center",
  },
  divider: {
    backgroundColor: theme.palette.divider,
    margin: "1rem 0",
  },
  shippingPrice: {
    padding: "0.5rem",
  },
}));

function CartTotalCard({ totalPrice }) {
  const classes = useStyles();

  const [shipping, setShipping] = useState("Standard");

  const shippingChangeHandler = (e) => {
    setShipping(e.target.value);
  };

  return (
    <>
      <Paper elevation={2} className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.title}>
              Cart Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.flex}>
              <Typography variant="body1">Subtotal</Typography>
              <Typography variant="body1">${totalPrice.toFixed(2)}</Typography>
            </div>
            <Divider className={classes.divider} light />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Shipping</Typography>
            <FormControl component="fieldset" style={{ width: "100%" }}>
              <RadioGroup
                name="shipping"
                value={shipping}
                onChange={shippingChangeHandler}
              >
                <div className={classes.flex}>
                  <FormControlLabel
                    value="Standard"
                    control={<Radio color="default" />}
                    label="Standard"
                  />
                  <Typography variant="body1" className={classes.shippingPrice}>
                    $10.00
                  </Typography>
                </div>
                <div className={classes.flex}>
                  <FormControlLabel
                    value="Express"
                    control={<Radio color="default" />}
                    label="Express"
                  />
                  <Typography variant="body1" className={classes.shippingPrice}>
                    $20.00
                  </Typography>
                </div>
              </RadioGroup>
            </FormControl>
            <Divider className={classes.divider} light />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default CartTotalCard;
