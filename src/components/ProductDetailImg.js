import React from "react";
import { useState } from "react";

import { Grid } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";

import womanFace1 from "../img/woman-face-1.jpg";
import womanFace2 from "../img/woman-face-2.jpg";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: "100%",
  },
  smallImgContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  smallImg: {
    width: "85%",
  },
}));

function ProductDetailImg({ name, img }) {
  const classes = useStyles();

  const [selectedImg, setSelectedImg] = useState(img);

  const changeImgHandler = (e) => {
    setSelectedImg(e.target.src);
  };

  return (
    <Grid container>
      <Grid item xs={3}>
        <div className={classes.smallImgContainer}>
          <img
            alt={name}
            src={img}
            onClick={changeImgHandler}
            className={classes.smallImg}
          />
          <img
            alt="Woman Face"
            src={womanFace1}
            onClick={changeImgHandler}
            className={classes.smallImg}
          />
          <img
            alt="Woman Face"
            src={womanFace2}
            onClick={changeImgHandler}
            className={classes.smallImg}
          />
        </div>
      </Grid>
      <Grid item xs={9}>
        <img alt={name} src={selectedImg} className={classes.img} />
      </Grid>
    </Grid>
  );
}

export default ProductDetailImg;
