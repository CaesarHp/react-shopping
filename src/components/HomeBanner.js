import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import womanFace from "../img/woman-face.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "95vh",
    background: `url(${womanFace})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    height: "95vh",
    display: "flex",
    alignItems: "center",
    padding: "0 4rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "90%",
    },
  },
  marginTop: {
    marginTop: "8rem",
  },
  title: {
    color: theme.palette.grey[900],
    fontWeight: 300,
    letterSpacing: "1px",
    marginBottom: theme.spacing(2),
  },
  body: {
    color: theme.palette.grey[900],
    fontWeight: 400,
    marginBottom: theme.spacing(4),
  },
  btn: {
    borderRadius: 0,
    padding: "1rem 2rem",
    backgroundColor: theme.palette.grey[900],
    fontWeight: 400,

    "&:hover": {
      backgroundColor: theme.palette.grey[800],
    },
  },
}));

function HomeBanner() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container className={classes.marginTop}>
            <Grid item xs={12} md={4}>
              <Typography variant="h2" className={classes.title}>
                Organic Beauty
              </Typography>

              <Typography variant="body1" className={classes.body}>
                Our formulations have proven efficacy, contain organic
                ingredients only and are 100% cruelty free.
              </Typography>

              <Button
                variant="contained"
                size="large"
                color="primary"
                disableElevation
                component={Link}
                to="/shop"
                className={classes.btn}
              >
                Skin care
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
