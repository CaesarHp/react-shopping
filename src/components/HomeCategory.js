import React from "react";

import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { ImageList } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import { ImageListItemBar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import handCare from "../img/hand-care.jpg";
import bodyCare from "../img/body-care.jpg";
import faceCare from "../img/face-care.jpg";
import clean from "../img/clean.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4rem",
  },
  imgContainer: {
    height: "30rem",
    width: "40rem",
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
  },
}));

const imgInfo = [
  { title: "Hand Care", img: handCare },
  { title: "Body Care", img: bodyCare },
  { title: "Face Care", img: faceCare },
  { title: "Cleanser", img: clean },
];

function HomeCategory() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className={classes.imgContainer}>
            <img alt="hand-care" src={handCare} className={classes.img} />
            <div className={classes.bottomBar}>
              <Typography variant="h4">Hand Care</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imgContainer}>
            <img alt="clean" src={clean} className={classes.img} />
            <div className={classes.bottomBar}>
              <Typography variant="h4">Cleanser</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imgContainer}>
            <img alt="face-care" src={faceCare} className={classes.img} />
            <div className={classes.bottomBar}>
              <Typography variant="h4">Face Care</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imgContainer}>
            <img alt="body-care" src={bodyCare} className={classes.img} />
            <div className={classes.bottomBar}>
              <Typography variant="h4">Body Care</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomeCategory;
