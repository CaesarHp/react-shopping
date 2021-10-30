import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

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

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.title}>
            Payment
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default PaymentMain;
