import React from "react";

import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import handCare from "../img/hand-care.jpg";
import bodyCare from "../img/body-care.jpg";
import faceCare from "../img/face-care.jpg";
import bodyLotion from "../img/body-lotion.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6rem 10rem",

    [theme.breakpoints.down("md")]: {
      padding: "6rem 3rem",
    },
  },
  imgContainer: {
    height: "30rem",
    overflow: "hidden",
    position: "relative",
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  bottomBar: {
    position: "absolute",
    left: 40,
    bottom: 30,

    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  title: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "1rem",
    },
  },
  btn: {
    borderRadius: 0,
    padding: "0.8rem 2rem",
    fontWeight: 400,
    color: "black",
    border: "1px solid black",
  },
}));

const imgInfo = [
  { title: "Hand Care", img: handCare },
  { title: "Body Care", img: bodyCare },
  { title: "Face Care", img: faceCare },
  { title: "Body Lotion", img: bodyLotion },
];

function HomeCategory() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} className={classes.imgContainer}>
            <img alt="body-care" src={bodyCare} className={classes.img} />
            <div className={classes.bottomBar}>
              <Typography variant="h5" className={classes.title}>
                Body Care
              </Typography>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                className={classes.btn}
              >
                Shop All
              </Button>
            </div>
          </Grid>

          <Grid item sm={12} md={6} className={classes.imgContainer}>
            <img alt="clean" src={bodyLotion} className={classes.img} />
            <div className={classes.bottomBar}>
              <Typography variant="h5" className={classes.title}>
                Body Lotion
              </Typography>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                className={classes.btn}
              >
                Shop All
              </Button>
            </div>
          </Grid>

          <Grid item sm={12} md={6} className={classes.imgContainer}>
            <img alt="face-care" src={faceCare} className={classes.img} />
            <div className={classes.bottomBar}>
              <Typography variant="h5" className={classes.title}>
                Face Care
              </Typography>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                className={classes.btn}
              >
                Shop All
              </Button>
            </div>
          </Grid>

          <Grid item sm={12} md={6} className={classes.imgContainer}>
            <img alt="hand-care" src={handCare} className={classes.img} />
            <div className={classes.bottomBar}>
              <Typography variant="h5" className={classes.title}>
                Hand Care
              </Typography>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                className={classes.btn}
              >
                Shop All
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomeCategory;
