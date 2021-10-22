import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import bottomBanner from "../img/bottom-banner.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "70vh",
    background: `url(${bottomBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    height: "70vh",
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
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "90%",
      padding: 0,
    },
  },
  title: {
    color: "black",
    fontWeight: 300,
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

function HomeBottomBanner() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container className={classes.contentContainer}>
            <Grid item xs={12} md={5}>
              <Typography variant="h3" className={classes.title}>
                Discover Promotion
              </Typography>

              <Typography variant="body1" className={classes.body}>
                Free gifts and samples with any order when you spend $49.99. End
                of season sale starts next week, subscrib us for more news.
              </Typography>

              <Button
                variant="contained"
                disableElevation
                component={Link}
                to="/shop"
                className={classes.btn}
              >
                View More
              </Button>
            </Grid>
            <Grid item md={7}></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default HomeBottomBanner;
