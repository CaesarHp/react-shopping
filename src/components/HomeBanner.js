import React from "react";
import { Link } from "react-router-dom";

import { Container } from "@material-ui/core";
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
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "90%",
    },
  },
  title: {
    color: "black",
    fontWeight: 300,
    letterSpacing: "1px",
    marginBottom: theme.spacing(2),
  },
  body: {
    color: "black",
    fontWeight: 400,
    marginBottom: theme.spacing(4),
  },
  btn: {
    borderRadius: 0,
    backgroundColor: "black",
    fontWeight: 400,
  },
}));

function HomeBanner() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" className={classes.title}>
                Organic Skin Care
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
                Shop All
              </Button>
            </Grid>
            <Grid item md={6}></Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default HomeBanner;
