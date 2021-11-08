import React from "react";
import { Link } from "react-router-dom";

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
    padding: "6rem",

    [theme.breakpoints.down("md")]: {
      padding: "6rem 2rem",
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
  leftBar: {
    position: "absolute",
    left: 40,
    top: 50,

    height: "80%",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      left: 30,
    },
  },
  title: {
    fontWeight: 500,
    color: "black",
    marginBottom: "0.5rem",
  },
  body: {
    fontWeight: 300,
    color: "black",
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

const bannerInfo = [
  { title: "Body Wash", body: "Body Soap & Body Scrubs", img: bodyCare },
  {
    title: "Moisturizers",
    body: "Body Lotions & Body Oils",
    img: bodyLotion,
  },
  { title: "Skin Care", body: "Moisturizers & Essences", img: faceCare },
  { title: "Hand Care", body: "Hand Creams & Hand Masks", img: handCare },
];

function HomeCategory() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2}>
          {bannerInfo.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={3}
              className={classes.imgContainer}
            >
              <img alt={item.title} src={item.img} className={classes.img} />
              <div className={classes.leftBar}>
                <div>
                  <Typography variant="h5" className={classes.title}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" className={classes.body}>
                    {item.body}
                  </Typography>
                </div>
                <div>
                  <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    component={Link}
                    to="/shop"
                    className={classes.btn}
                  >
                    Shop All
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default HomeCategory;
