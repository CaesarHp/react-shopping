import React from "react";

import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import allPageBanner from "../img/all-page-banner.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "60vh",
    background: `url(${allPageBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.breakpoints.down("md")]: {
      minHeight: "30vh",
    },
  },
  container: {
    height: "60vh",
    display: "flex",
    alignItems: "flex-end",
    padding: "0 4rem",

    [theme.breakpoints.down("md")]: {
      height: "30vh",
      textAlign: "center",
      justifyContent: "center",
      padding: 0,
    },
  },
  contentContainer: {
    marginBottom: "5rem",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "90%",
      padding: 0,
      marginBottom: "4rem",
    },

    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
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

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
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

function AllPageTopBanner({ title }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container className={classes.contentContainer}>
            <Grid item xs={12} lg={5}>
              <Typography variant="h3" className={classes.title}>
                {title}
              </Typography>

              <Typography variant="body1" className={classes.body}>
                Free gifts and samples with any order when you spend $49.99. End
                of season sale starts next week, subscrib us for more news.
              </Typography>
            </Grid>
            <Grid item lg={7}></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default AllPageTopBanner;
