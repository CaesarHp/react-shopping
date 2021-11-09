import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import topBanner from "../img/top-banner.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    background: `url(${topBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    padding: "0 4rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center",
      padding: 0,
    },
  },
  contentContainer: {
    marginTop: "5rem",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "90%",
      padding: 0,
    },
  },
  title: {
    color: "black",
    fontWeight: 400,
    marginBottom: theme.spacing(2),
  },
  body: {
    color: "black",
    fontWeight: 400,
    marginBottom: theme.spacing(4),
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

function HomeBanner() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container className={classes.contentContainer}>
            <Grid item xs={12} md={4}>
              <Typography variant="h3" className={classes.title}>
                Organic Beauty
              </Typography>

              <Typography variant="body1" className={classes.body}>
                Our formulations have proven efficacy, contain organic
                ingredients only and are 100% cruelty free.
              </Typography>

              <Button
                variant="contained"
                disableElevation
                component={Link}
                to="/shop"
                className={classes.btn}
              >
                Shop All
              </Button>
            </Grid>
            <Grid item md={8}></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
