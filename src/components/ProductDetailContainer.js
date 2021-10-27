import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6rem",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: 400,
    marginBottom: "2rem",
  },
  body: {
    fontWeight: 300,
    marginBottom: "2rem",
  },
  sephora: {
    fontWeight: 200,
    marginBottom: "2rem",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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

function ProductDetailContainer({
  name,
  price,
  img,
  describe,
  brand,
  category,
}) {
  const classes = useStyles();

  return (
    <>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} lg={6}>
          <img alt={name} src={img} className={classes.img} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={classes.contentContainer}>
            <div>
              <Typography variant="h4" className={classes.title}>
                {name}
              </Typography>
              <Typography variant="h4" className={classes.title}>
                ${price}
              </Typography>
              <Typography variant="body2" className={classes.sephora}>
                * All images and description from Sephora.
              </Typography>
              <Typography variant="body1" className={classes.body}>
                {describe}
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Brand: {brand}
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Category: {category}
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                disableElevation
                className={classes.btn}
              >
                Shop All
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductDetailContainer;
