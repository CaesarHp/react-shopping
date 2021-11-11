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
    backgroundPosition: "bottom",

    [theme.breakpoints.down("md")]: {
      minHeight: "40vh",
    },
  },
  container: {
    height: "60vh",
    display: "flex",
    alignItems: "flex-end",
    padding: "0 4rem",

    [theme.breakpoints.down("md")]: {
      height: "40vh",
    },

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center",
      padding: 0,
    },
  },
  contentContainer: {
    width: "70%",
    marginBottom: "7rem",

    [theme.breakpoints.down("md")]: {
      marginBottom: "5rem",
    },

    [theme.breakpoints.down("sm")]: {
      marginBottom: "4rem",
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

function AllPageTopBanner({ title, body }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container className={classes.contentContainer}>
            <Grid item xs={12} md={5}>
              <Typography variant="h3" className={classes.title}>
                {title}
              </Typography>
              <Typography variant="body1" className={classes.body}>
                {body}
              </Typography>
            </Grid>
            <Grid item md={7}></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default AllPageTopBanner;
