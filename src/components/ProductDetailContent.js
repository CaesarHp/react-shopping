import React from "react";
import { useState } from "react";

import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 400,
    marginBottom: "2rem",
  },
  body: {
    fontWeight: 300,
    marginBottom: "1rem",
  },
  sephora: {
    fontWeight: 200,
    marginBottom: "1rem",
  },
  contentContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  btnContainer: {
    display: "flex",
  },
  addToCartBtn: {
    borderRadius: 0,
    padding: "1rem 2rem",
    backgroundColor: "black",
    fontWeight: 400,
    textTransform: "none",
    color: "white",

    "&:hover": {
      backgroundColor: theme.palette.grey[900],
    },
  },
  itemNumberBtn: {
    display: "flex",
    alignItems: "center",
    border: "1px solid black",
    marginRight: "2rem",
  },
  itemNumber: {
    fontWeight: 400,
    margin: "0 0.8rem",
  },
}));

function ProductDetailContent({ name, price, describe, brand, category }) {
  const classes = useStyles();

  const [itemNumber, setItemNumber] = useState(1);

  const addItemHandler = () => {
    setItemNumber(itemNumber + 1);
  };
  const removeItemHandler = () => {
    if (itemNumber <= 1) {
      setItemNumber(1);
    } else {
      setItemNumber(itemNumber - 1);
    }
  };

  return (
    <>
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
        <div className={classes.btnContainer}>
          <div className={classes.itemNumberBtn}>
            <div>
              <IconButton onClick={removeItemHandler}>
                <RemoveIcon style={{ color: "black" }} />
              </IconButton>
            </div>
            <Typography variant="body1" className={classes.itemNumber}>
              {itemNumber}
            </Typography>
            <div>
              <IconButton onClick={addItemHandler}>
                <AddIcon style={{ color: "black" }} />
              </IconButton>
            </div>
          </div>

          <Button
            variant="contained"
            disableElevation
            className={classes.addToCartBtn}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductDetailContent;
